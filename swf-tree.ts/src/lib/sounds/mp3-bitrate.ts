import {IntegerType, LiteralType, UnionType, VersionedType} from "kryo";

export type SoundRate = 32000;

export namespace SoundRate {
  export type Json = 5500 | 11000 | 22000 | 44000;

  export const type: UnionType<SoundRate> = new UnionType<SoundRate>({
    variants: [
      new LiteralType({type: new IntegerType, value: 5500 as SoundRate}),
      new LiteralType({type: new IntegerType, value: 11000 as SoundRate}),
      new LiteralType({type: new IntegerType, value: 22000 as SoundRate}),
      new LiteralType({type: new IntegerType, value: 44000 as SoundRate}),
    ],
    matcher: (
      value: any,
      variants: VersionedType<SoundRate, number, number, any>[],
    ): VersionedType<SoundRate, number, number, any> | undefined => {
      switch (value) {
        case 5500:
          return variants[0];
        case 11000:
          return variants[1];
        case 22000:
          return variants[2];
        case 44000:
          return variants[3];
        default:
          return undefined;
      }
    },
    readMatcher: (
      format: "bson" | "json" | "qs",
      value: any,
      variants: VersionedType<SoundRate, number, number, any>[],
    ): VersionedType<SoundRate, number, number, any> | undefined => {
      switch (format === "qs" ? parseInt(value, 10) : value) {
        case 5500:
          return variants[0];
        case 11000:
          return variants[1];
        case 22000:
          return variants[2];
        case 44000:
          return variants[3];
        default:
          return undefined;
      }
    },
  });
}
