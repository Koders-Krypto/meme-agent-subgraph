import { Address } from "@graphprotocol/graph-ts";
import { LPToken, ERC20Balance } from "../generated/schema";
import { Transfer as TransferEvent, Sync as SyncEvent } from "../generated/templates/LiquidityPair/LiquidityPair";
import { createAccount } from "./helpers";

export function handleTransfer(event: TransferEvent): void {
	let lpToken = LPToken.load(event.address);
	if (!lpToken) return;

	let fromAccount = createAccount(event.params.from);
	let toAccount = createAccount(event.params.to);

	if (fromAccount.id != Address.zero()) {
		let fromErc20Balance = ERC20Balance.load(lpToken.id.toHex() + "-" + fromAccount.id.toHex());
		if (!fromErc20Balance) {
			fromErc20Balance = new ERC20Balance(lpToken.id.toHex() + "-" + fromAccount.id.toHex());
			fromErc20Balance.account = fromAccount.id;
			fromErc20Balance.value = event.params.value;
		}
		fromErc20Balance.value = fromErc20Balance.value.minus(event.params.value);
		fromErc20Balance.save();
	}

	let toErc20Balance = ERC20Balance.load(lpToken.id.toHex() + "-" + toAccount.id.toHex());
	if (!toErc20Balance) {
		toErc20Balance = new ERC20Balance(lpToken.id.toHex() + "-" + toAccount.id.toHex());
		toErc20Balance.account = toAccount.id;
		toErc20Balance.value = event.params.value;
	}
	toErc20Balance.value = toErc20Balance.value.plus(event.params.value);
	toErc20Balance.save();
}

export function handleSync(event: SyncEvent): void {
	let lpToken = LPToken.load(event.address);
	if (!lpToken) return;
	lpToken.reserve0 = event.params.reserve0;
	lpToken.reserve1 = event.params.reserve1;
	lpToken.save();
}
