import {CaseStyle, SimpleEnumType} from "kryo";

export enum JoinStyleType {
  Bevel,
  Miter,
  Round,
}

export namespace JoinStyleType {
  export type Json =
    "bevel"
    | "miter"
    | "round";

  export const type: SimpleEnumType<JoinStyleType> = new SimpleEnumType<JoinStyleType>({
    enum: JoinStyleType,
    rename: CaseStyle.KebabCase,
  });
}
