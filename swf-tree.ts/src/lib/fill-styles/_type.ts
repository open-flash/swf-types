import {CaseStyle, SimpleEnumType} from "kryo";

export enum FillStyleType {
  Bitmap,
  FocalGradient,
  LinearGradient,
  RadialGradient,
  Solid,
}

export namespace FillStyleType {
  export type Json =
    "bitmap"
    | "focal-gradient"
    | "linear-gradient"
    | "radial-gradient"
    | "solid";

  export const type: SimpleEnumType<FillStyleType> = new SimpleEnumType<FillStyleType>({
    enum: FillStyleType,
    rename: CaseStyle.KebabCase,
  });
}
