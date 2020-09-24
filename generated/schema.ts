// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Deposit extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Deposit entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Deposit entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Deposit", id.toString(), this);
  }

  static load(id: string): Deposit | null {
    return store.get("Deposit", id) as Deposit | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): string {
    let value = this.get("user");
    return value.toString();
  }

  set user(value: string) {
    this.set("user", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get amount(): string {
    let value = this.get("amount");
    return value.toString();
  }

  set amount(value: string) {
    this.set("amount", Value.fromString(value));
  }

  get blockNumber(): i32 {
    let value = this.get("blockNumber");
    return value.toI32();
  }

  set blockNumber(value: i32) {
    this.set("blockNumber", Value.fromI32(value));
  }

  get blockTimestamp(): string {
    let value = this.get("blockTimestamp");
    return value.toString();
  }

  set blockTimestamp(value: string) {
    this.set("blockTimestamp", Value.fromString(value));
  }

  get txHash(): string {
    let value = this.get("txHash");
    return value.toString();
  }

  set txHash(value: string) {
    this.set("txHash", Value.fromString(value));
  }
}

export class Withdraw extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Withdraw entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Withdraw entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Withdraw", id.toString(), this);
  }

  static load(id: string): Withdraw | null {
    return store.get("Withdraw", id) as Withdraw | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): string {
    let value = this.get("user");
    return value.toString();
  }

  set user(value: string) {
    this.set("user", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get amount(): string {
    let value = this.get("amount");
    return value.toString();
  }

  set amount(value: string) {
    this.set("amount", Value.fromString(value));
  }

  get blockNumber(): i32 {
    let value = this.get("blockNumber");
    return value.toI32();
  }

  set blockNumber(value: i32) {
    this.set("blockNumber", Value.fromI32(value));
  }

  get blockTimestamp(): string {
    let value = this.get("blockTimestamp");
    return value.toString();
  }

  set blockTimestamp(value: string) {
    this.set("blockTimestamp", Value.fromString(value));
  }

  get txHash(): string {
    let value = this.get("txHash");
    return value.toString();
  }

  set txHash(value: string) {
    this.set("txHash", Value.fromString(value));
  }
}
