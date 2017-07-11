import {CaseStyle, SimpleEnumType} from "kryo";

export enum FilterId {
  DropShadow,
  Blur,
  Glow,
  Bevel,
  GradientGlow,
  Convolution,
  ColorMatrix,
  GradientBevel,
}

export namespace FilterId {
  export type Json =
    "drop-shadow"
    | "blur"
    | "glow"
    | "bevel-filter"
    | "gradient-glow"
    | "convolution"
    | "color-matrix"
    | "gradient-bevel";

  export const type: SimpleEnumType<FilterId> = new SimpleEnumType<FilterId>({
    enum: FilterId,
    rename: CaseStyle.KebabCase,
  });
}
