import { Address } from "@graphprotocol/graph-ts";
import { MemeCoin, ERC20Balance } from "../generated/schema";
import { Transfer as TransferEvent } from "../generated/templates/MemeCoin/MemeCoin";
import { createAccount } from "./helpers";

export function handleTransfer(event: TransferEvent): void {
	let memeCoin = MemeCoin.load(event.address);
	if (!memeCoin) return;

	let fromAccount = createAccount(event.params.from);
	let toAccount = createAccount(event.params.to);

	if (fromAccount.id != Address.zero()) {
		let fromErc20Balance = ERC20Balance.load(memeCoin.id.toHex() + "-" + fromAccount.id.toHex());
		if (!fromErc20Balance) {
			fromErc20Balance = new ERC20Balance(memeCoin.id.toHex() + "-" + fromAccount.id.toHex());
			fromErc20Balance.account = fromAccount.id;
			fromErc20Balance.value = event.params.value;
		}
		fromErc20Balance.value = fromErc20Balance.value.minus(event.params.value);
		fromErc20Balance.save();
	}

	let toErc20Balance = ERC20Balance.load(memeCoin.id.toHex() + "-" + toAccount.id.toHex());
	if (!toErc20Balance) {
		toErc20Balance = new ERC20Balance(memeCoin.id.toHex() + "-" + toAccount.id.toHex());
		toErc20Balance.account = toAccount.id;
		toErc20Balance.value = event.params.value;
	}
	toErc20Balance.value = toErc20Balance.value.plus(event.params.value);
	toErc20Balance.save();
}
