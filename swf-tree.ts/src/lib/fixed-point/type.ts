import { Incident } from "incident";
import * as kryo from "kryo";
import { FixedPoint, FixedPointConstructor } from "./fixed-point";
import { createNotImplementedError } from "kryo/errors/not-implemented";
import { createInvalidTypeError } from "kryo/errors/invalid-type";

export type Name = "fixed-point";
export const name: Name = "fixed-point";
export namespace bson {
  export type Input = string | number;
  export type Output = string;
}
export namespace json {
  export type Input = string | number;
  export type Output = string;

  export interface Type {
    name: Name;
    signed: boolean;
    intBits: number;
    fracBits: number;
  }
}
export namespace qs {
  export type Input = string | number;
  export type Output = string;
}
export type Diff = number;

export interface Options<T extends FixedPoint> {
  type: FixedPointConstructor<T>;
}

export class FixedPointType<T extends FixedPoint> implements kryo.VersionedType<T, json.Input, json.Output, Diff> {

  readonly name: Name = name;
  readonly type: FixedPointConstructor<T>;
  private outPattern: RegExp;

  constructor(options: Options<T>) {
    this.type = options.type;
    const signed: boolean = this.type.signed;
    const intBits: number = this.type.intBits;
    const fracBits: number = this.type.fracBits;
    if (intBits % 4 !== 0 || intBits % 4 !== 0 || intBits + fracBits > 32) {
      throw new Incident(
        "InvalidFixedPointTypeOptions",
        "The length of each part must be a multiple of 4, and the sum <= 32",
      );
    }
    this.outPattern = new RegExp(`^([+-])0x([0-9a-f]{${intBits / 4}})\.([0-9a-f]{${fracBits / 4}})$`);
  }

  toJSON(): json.Type {
    throw createNotImplementedError("FixedPointType#toJSON");
  }

  readTrustedJson(input: json.Output): T {
    const execArray: RegExpExecArray = this.outPattern.exec(input)!;
    const sign: -1 | 1 = execArray[1] === "-" ? -1 : 1;
    const intPart: number = parseInt(execArray[2], 16);
    const fracPart: number = parseInt(execArray[3], 16);
    const epsilons: number = sign * (intPart * Math.pow(2, this.type.fracBits) + fracPart);
    return this.type.fromEpsilons(epsilons);
  }

  readJson(input: any): T {
    if (typeof input !== "string") {
      throw createInvalidTypeError("string", input);
    }
    const execArray: RegExpExecArray | null = this.outPattern.exec(input);
    if (execArray === null) {
      throw new Incident(
        "InvalidFixedPoint",
        "The provided input does not matched the expected pattern",
      );
    }
    const sign: -1 | 1 = execArray[1] === "-" ? -1 : 1;
    const intPart: number = parseInt(execArray[2], 16);
    const fracPart: number = parseInt(execArray[3], 16);
    const epsilons: number = sign * (intPart * Math.pow(2, this.type.fracBits) + fracPart);
    return this.type.fromEpsilons(epsilons);
  }

  writeJson(val: T): json.Output {
    const sign: "+" | "-" = val.epsilons < 0 ? "-" : "+";
    const fracPart: number = Math.abs(val.epsilons) % Math.pow(2, this.type.fracBits);
    const intPart: number = (Math.abs(val.epsilons) - fracPart) / Math.pow(2, this.type.fracBits);
    // TODO(demurgos): Remove `any` when type definitions for ES2018 strings are available
    const fracStr: string = (fracPart.toString(16) as any).padStart(this.type.fracBits / 4, "0");
    const intStr: string = (intPart.toString(16) as any).padStart(this.type.intBits / 4, "0");
    return `${sign}0x${intStr}.${fracStr}`;
  }

  testError(val: T): Error | undefined {
    if (!(val instanceof <any> this.type)) {
      return createInvalidTypeError("FixedPointNumber", val);
    }
    return undefined;
  }

  test(val: T): boolean {
    return this.testError(val) === undefined;
  }

  equals(val1: T, val2: T): boolean {
    return val1.epsilons === val2.epsilons;
  }

  clone(val: T): T {
    return this.type.fromEpsilons(val.epsilons);
  }

  diff(oldVal: T, newVal: T): Diff | undefined {
    return newVal.epsilons === oldVal.epsilons ? undefined : newVal.epsilons - oldVal.epsilons;
  }

  patch(oldVal: T, diff: Diff | undefined): T {
    return diff === undefined ? this.clone(oldVal) : this.type.fromEpsilons(oldVal.epsilons + diff);
  }

  reverseDiff(diff: Diff | undefined): Diff | undefined {
    return diff && -diff;
  }

  squash(diff1: Diff | undefined, diff2: Diff | undefined): Diff | undefined {
    if (diff1 === undefined) {
      return diff2;
    } else if (diff2 === undefined) {
      return diff1;
    }
    return diff2 === -diff1 ? undefined : diff1 + diff2;
  }
}
