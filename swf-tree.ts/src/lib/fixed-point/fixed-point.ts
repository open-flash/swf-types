import { Incident } from "incident";
import { IoType, Reader, Writer } from "kryo/core";
import { readVisitor } from "kryo/readers/read-visitor";

export interface FixedPointOptions {
  readonly signed: boolean;
  readonly intBits: number;
  readonly fracBits: number;
}

export interface FixedPoint {
  readonly epsilons: number;

  valueOf(): number;
}

type _FixedPoint = FixedPoint;

export interface FixedPointConstructor extends IoType<FixedPoint>, FixedPointOptions {
  fromEpsilons(epsilons: number): FixedPoint;

  fromValue(value: number): FixedPoint;
}

export function createFixedPoint(options: FixedPointOptions): FixedPointConstructor {
  const {signed, intBits, fracBits} = options;

  return class FixedPoint {
    static readonly signed: boolean = signed;
    static readonly intBits: number = intBits;
    static readonly fracBits: number = fracBits;

    readonly epsilons: number;

    private constructor(epsilons: number) {
      this.epsilons = epsilons;
    }

    static toJSON() {
      throw new Incident("NotImplemented", "FixedPointType#toJSON");
    }

    static clone(value: _FixedPoint): _FixedPoint {
      return value;
    }

    static equals(left: _FixedPoint, right: _FixedPoint): boolean {
      return left.epsilons === right.epsilons;
    }

    static testError(value: _FixedPoint): Error | undefined {
      if (typeof value !== "object" || value === null || typeof value.epsilons !== "number") {
        return new Incident("InvalidType", "Expected `{epsilons: number}`");
      }
      const epsilons: number = value.epsilons;
      if ((epsilons | 0) !== epsilons) {
        return new Incident("InvalidType", "Expected `Sint32`");
      }
      const max: number = Math.pow(2, this.intBits + this.fracBits - (this.signed ? 1 : 0));
      const min: number = this.signed ? -max - 1 : 0;

      if (epsilons < min || epsilons > max) {
        return new Incident("RangeError", {min, max, value});
      }

      return undefined;
    }

    static test(value: _FixedPoint): boolean {
      return this.testError(value) === undefined;
    }

    static read<R>(reader: Reader<R>, raw: R): _FixedPoint {
      return reader.readFloat64(raw, readVisitor({
        fromFloat64: (input: number): _FixedPoint => {
          const result: _FixedPoint = FixedPoint.fromEpsilons(input);
          const error: Error | undefined = this.testError(result);
          if (error !== undefined) {
            throw error;
          }
          return result;
        },
      }));
    }

    static write<W>(writer: Writer<W>, value: _FixedPoint): W {
      return writer.writeFloat64(value.epsilons);
    }

    static fromEpsilons(epsilons: number): _FixedPoint {
      return new FixedPoint(epsilons);
    }

    static fromValue(value: number): _FixedPoint {
      return new FixedPoint(value * Math.pow(2, fracBits));
    }

    valueOf(): number {
      return this.epsilons * Math.pow(2, -fracBits);
    }
  };
}
