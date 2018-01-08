import { CaseStyle, SimpleEnumType } from "kryo";

export enum CapStyle {
  Round,
  None,
  Square,
}

export namespace CapStyle {
  export type Json =
    "round"
    | "none"
    | "square";

  export const type: SimpleEnumType<CapStyle> = new SimpleEnumType<CapStyle>({
    enum: CapStyle,
    rename: CaseStyle.KebabCase,
  });
}
