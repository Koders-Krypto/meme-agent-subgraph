import { PairCreated as PairCreatedEvent } from "../generated/LiquidityFactory/LiquidityFactory";
import { LiquidityPair as LiquidityPairFactory } from "../generated/templates";
import { LiquidityPair } from "../generated/templates/LiquidityPair/LiquidityPair";
import { LPToken } from "../generated/schema";
import { BigInt } from "@graphprotocol/graph-ts";

export function handlePairCreated(event: PairCreatedEvent): void {
	LiquidityPairFactory.create(event.params.pair);

	let lpToken = LiquidityPair.bind(event.params.pair);

	let name = lpToken.try_name();
	if (name.reverted) return;

	let symbol = lpToken.try_symbol();
	if (symbol.reverted) return;

	let entity = new LPToken(event.params.pair);
	entity.name = name.value;
	entity.symbol = symbol.value;
	entity.decimals = BigInt.fromI32(18);
	entity.token0 = event.params.token0;
	entity.token1 = event.params.token1;
	entity.reserve0 = BigInt.fromI32(0);
	entity.reserve1 = BigInt.fromI32(0);
	entity.save();
}
