// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Account extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Account entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Account must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Account", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): Account | null {
    return changetype<Account | null>(
      store.get_in_block("Account", id.toHexString())
    );
  }

  static load(id: Bytes): Account | null {
    return changetype<Account | null>(store.get("Account", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get ERC20balances(): ERC20BalanceLoader {
    return new ERC20BalanceLoader(
      "Account",
      this.get("id")!.toString(),
      "ERC20balances"
    );
  }
}

export class MemeCoin extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save MemeCoin entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type MemeCoin must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("MemeCoin", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): MemeCoin | null {
    return changetype<MemeCoin | null>(
      store.get_in_block("MemeCoin", id.toHexString())
    );
  }

  static load(id: Bytes): MemeCoin | null {
    return changetype<MemeCoin | null>(store.get("MemeCoin", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get creator(): Bytes {
    let value = this.get("creator");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set creator(value: Bytes) {
    this.set("creator", Value.fromBytes(value));
  }

  get name(): string | null {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (!value) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(<string>value));
    }
  }

  get symbol(): string | null {
    let value = this.get("symbol");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set symbol(value: string | null) {
    if (!value) {
      this.unset("symbol");
    } else {
      this.set("symbol", Value.fromString(<string>value));
    }
  }

  get decimals(): BigInt {
    let value = this.get("decimals");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set decimals(value: BigInt) {
    this.set("decimals", Value.fromBigInt(value));
  }

  get totalSupply(): BigInt {
    let value = this.get("totalSupply");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set totalSupply(value: BigInt) {
    this.set("totalSupply", Value.fromBigInt(value));
  }

  get initialSupply(): BigInt {
    let value = this.get("initialSupply");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set initialSupply(value: BigInt) {
    this.set("initialSupply", Value.fromBigInt(value));
  }
}

export class LPToken extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save LPToken entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type LPToken must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("LPToken", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): LPToken | null {
    return changetype<LPToken | null>(
      store.get_in_block("LPToken", id.toHexString())
    );
  }

  static load(id: Bytes): LPToken | null {
    return changetype<LPToken | null>(store.get("LPToken", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get name(): string | null {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (!value) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(<string>value));
    }
  }

  get symbol(): string | null {
    let value = this.get("symbol");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set symbol(value: string | null) {
    if (!value) {
      this.unset("symbol");
    } else {
      this.set("symbol", Value.fromString(<string>value));
    }
  }

  get decimals(): BigInt {
    let value = this.get("decimals");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set decimals(value: BigInt) {
    this.set("decimals", Value.fromBigInt(value));
  }

  get token0(): Bytes {
    let value = this.get("token0");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set token0(value: Bytes) {
    this.set("token0", Value.fromBytes(value));
  }

  get token1(): Bytes {
    let value = this.get("token1");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set token1(value: Bytes) {
    this.set("token1", Value.fromBytes(value));
  }

  get reserve0(): BigInt {
    let value = this.get("reserve0");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set reserve0(value: BigInt) {
    this.set("reserve0", Value.fromBigInt(value));
  }

  get reserve1(): BigInt {
    let value = this.get("reserve1");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set reserve1(value: BigInt) {
    this.set("reserve1", Value.fromBigInt(value));
  }
}

export class ERC20Balance extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ERC20Balance entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ERC20Balance must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ERC20Balance", id.toString(), this);
    }
  }

  static loadInBlock(id: string): ERC20Balance | null {
    return changetype<ERC20Balance | null>(
      store.get_in_block("ERC20Balance", id)
    );
  }

  static load(id: string): ERC20Balance | null {
    return changetype<ERC20Balance | null>(store.get("ERC20Balance", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get account(): Bytes | null {
    let value = this.get("account");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set account(value: Bytes | null) {
    if (!value) {
      this.unset("account");
    } else {
      this.set("account", Value.fromBytes(<Bytes>value));
    }
  }

  get value(): BigInt {
    let value = this.get("value");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }
}

export class ERC20BalanceLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): ERC20Balance[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<ERC20Balance[]>(value);
  }
}
