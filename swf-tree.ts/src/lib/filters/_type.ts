import {CaseStyle, SimpleEnumType} from "kryo";

export enum FilterType {
  DropShadow,
  Blur,
  Glow,
  Bevel,
  GradientGlow,
  Convolution,
  ColorMatrix,
  GradientBevel,
}

export namespace FilterType {
  export type Json =
    "drop-shadow"
    | "blur"
    | "glow"
    | "bevel-filter"
    | "gradient-glow"
    | "convolution"
    | "color-matrix"
    | "gradient-bevel";

  export const type: SimpleEnumType<FilterType> = new SimpleEnumType<FilterType>({
    enum: FilterType,
    rename: CaseStyle.KebabCase,
  });
}
