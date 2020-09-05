import { TaggedUnionType } from "kryo/lib/tagged-union.js";
import * as filters from "./filters/index.js";

export type Filter =
  filters.Bevel
  | filters.Blur
  | filters.ColorMatrix
  | filters.Convolution
  | filters.DropShadow
  | filters.Glow
  | filters.GradientBevel
  | filters.GradientGlow;

export const $Filter: TaggedUnionType<Filter> = new TaggedUnionType<Filter>({
  variants: [
    filters.$Bevel,
    filters.$Blur,
    filters.$ColorMatrix,
    filters.$Convolution,
    filters.$DropShadow,
    filters.$Glow,
    filters.$GradientBevel,
    filters.$GradientGlow,
  ],
  tag: "filter",
});
