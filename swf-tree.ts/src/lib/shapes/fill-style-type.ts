import {CaseStyle, SimpleEnumType} from "kryo";

export enum FillStyleType {
  Solid,
  LinearGradient,
  RadialGradient,
  FocalRadialGradient,
  RepeatingBitmap,
  ClippedBitmap,
  NonSmoothedRepeatingBitmap,
  NonSmoothedClippedBitmap,
}

export namespace FillStyleType {
  export type Json =
    "solid"
    | "linear-gradient"
    | "radial-gradient"
    | "focal-radial-gradient"
    | "repeating-bitmap"
    | "clipped-bitmap"
    | "non-smoothed-repeating-bitmap"
    | "non-smothed-clipped-bitmap";

  export const type: SimpleEnumType<FillStyleType> = new SimpleEnumType<FillStyleType>({
    enum: FillStyleType,
    rename: CaseStyle.KebabCase,
  });
}
