import {CaseStyle, SimpleEnumType} from "kryo";

export enum MorphFillStyleType {
  Bitmap,
  FocalGradient,
  LinearGradient,
  RadialGradient,
  Solid,
}

export namespace MorphFillStyleType {
  export type Json =
    "bitmap"
    | "focal-gradient"
    | "linear-gradient"
    | "radial-gradient"
    | "solid";

  export const type: SimpleEnumType<MorphFillStyleType> = new SimpleEnumType<MorphFillStyleType>({
    enum: MorphFillStyleType,
    rename: CaseStyle.KebabCase,
  });
}
