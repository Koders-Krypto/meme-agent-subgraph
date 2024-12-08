import { Address, BigDecimal } from "@graphprotocol/graph-ts";
import { Account } from "../generated/schema";

export function createAccount(address: Address): Account {
	let account = Account.load(address);
	if (account === null) {
		account = new Account(address);
		account.save();
	}
	return account;
}
