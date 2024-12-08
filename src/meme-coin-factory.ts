import { MemeCoinCreated as MemeCoinCreatedEvent } from "../generated/MemeCoinFactory/MemeCoinFactory";
import { MemeCoin as MemeCoinTemplate } from "../generated/templates";
import { MemeCoin } from "../generated/schema";
import { createAccount } from "./helpers";
import { BigInt } from "@graphprotocol/graph-ts";

export function handleMemeCoinCreated(event: MemeCoinCreatedEvent): void {
	MemeCoinTemplate.create(event.params.memeCoin);

	let creator = createAccount(event.params.creator);

	let entity = new MemeCoin(event.params.memeCoin);
	entity.creator = creator.id;
	entity.name = event.params.name;
	entity.symbol = event.params.symbol;
	entity.decimals = BigInt.fromI32(18);
	entity.totalSupply = event.params.maxSupply;
	entity.initialSupply = event.params.initialSupply;

	entity.save();
}
