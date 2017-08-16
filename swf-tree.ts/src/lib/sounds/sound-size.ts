import {IntegerType, LiteralType, UnionType, VersionedType} from "kryo";

export type SoundSize = 8 | 16;

export namespace SoundSize {
  export type Json = 8 | 16;

  export const type: UnionType<SoundSize> = new UnionType<SoundSize>({
    variants: [
      new LiteralType({type: new IntegerType, value: 8 as SoundSize}),
      new LiteralType({type: new IntegerType, value: 16 as SoundSize}),
    ],
    matcher: (
      value: any,
      variants: VersionedType<SoundSize, number, number, any>[],
    ): VersionedType<SoundSize, number, number, any> | undefined => {
      switch (value) {
        case 8:
          return variants[0];
        case 16:
          return variants[1];
        default:
          return undefined;
      }
    },
    readMatcher: (
      format: "bson" | "json" | "qs",
      value: any,
      variants: VersionedType<SoundSize, number, number, any>[],
    ): VersionedType<SoundSize, number, number, any> | undefined => {
      switch (format === "qs" ? parseInt(value, 10) : value) {
        case 8:
          return variants[0];
        case 16:
          return variants[1];
        default:
          return undefined;
      }
    },
  });
}
