import {CaseStyle, SimpleEnumType} from "kryo";

export enum JoinStyle {
  Round,
  Bevel,
  Miter,
}

export namespace JoinStyle {
  export type Json =
    "round"
    | "bevel"
    | "miter";

  export const type: SimpleEnumType<JoinStyle> = new SimpleEnumType<JoinStyle>({
    enum: JoinStyle,
    rename: CaseStyle.KebabCase,
  });
}
