import { IntegerType, LiteralType, UnionType } from "kryo";
import { Serializer, Type } from "kryo/types";

export type Mp3BitRate = 32000;

export namespace Mp3BitRate {
  export type Json = 5500 | 11000 | 22000 | 44000;

  const variants: LiteralType<Mp3BitRate>[] = [
    new LiteralType({type: new IntegerType, value: 5500 as Mp3BitRate}),
    new LiteralType({type: new IntegerType, value: 11000 as Mp3BitRate}),
    new LiteralType({type: new IntegerType, value: 22000 as Mp3BitRate}),
    new LiteralType({type: new IntegerType, value: 44000 as Mp3BitRate}),
  ];

  export const type: UnionType<Mp3BitRate> = new UnionType<Mp3BitRate>({
    variants,
    matcher: (value: any): Type<Mp3BitRate> | undefined => {
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
    readMatcher: (value: any, serializer: Serializer): Type<Mp3BitRate> | undefined => {
      switch (serializer.format === "qs" ? parseInt(value, 10) : value) {
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
