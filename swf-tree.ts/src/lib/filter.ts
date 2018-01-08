import { TaggedUnionType } from "kryo";
import * as filters from "./filters/index";

export type Filter =
  filters.Bevel
  | filters.Blur
  | filters.ColorMatrix
  | filters.Convolution
  | filters.DropShadow
  | filters.Glow
  | filters.GradientBevel
  | filters.GradientGlow;

export namespace Filter {
  export type Json =
    filters.Bevel.Json
    | filters.Blur.Json
    | filters.ColorMatrix.Json
    | filters.Convolution.Json
    | filters.DropShadow.Json
    | filters.Glow.Json
    | filters.GradientBevel.Json
    | filters.GradientGlow.Json;

  export const type: TaggedUnionType<Filter> = new TaggedUnionType<Filter>({
    variants: [
      filters.Bevel.type,
      filters.Blur.type,
      filters.ColorMatrix.type,
      filters.Convolution.type,
      filters.DropShadow.type,
      filters.Glow.type,
      filters.GradientBevel.type,
      filters.GradientGlow.type,
    ],
    tag: "filter",
  });
}
