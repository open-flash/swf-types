import { IntegerType, LiteralType, UnionType, VersionedType } from "kryo";
import { Serializer } from "kryo/types";

export type SoundSize = 8 | 16;

export namespace SoundSize {
  export type Json = 8 | 16;

  const variants: LiteralType<SoundSize>[] = [
    new LiteralType({type: new IntegerType, value: 8 as SoundSize}),
    new LiteralType({type: new IntegerType, value: 16 as SoundSize}),
  ];

  export const type: UnionType<SoundSize> = new UnionType<SoundSize>({
    variants,
    matcher: (value: any): VersionedType<SoundSize, number, number, any> | undefined => {
      switch (value) {
        case 8:
          return variants[0];
        case 16:
          return variants[1];
        default:
          return undefined;
      }
    },
    readMatcher: (value: any, serializer: Serializer): VersionedType<SoundSize, number, number, any> | undefined => {
      switch (serializer.format === "qs" ? parseInt(value, 10) : value) {
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
