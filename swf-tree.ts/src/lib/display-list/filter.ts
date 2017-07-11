import {TaggedUnionType} from "kryo";
import {BevelFilter} from "./bevel-filter";
import {BlurFilter} from "./blur-filter";
import {ColorMatrixFilter} from "./color-matrix-filter";
import {ConvolutionFilter} from "./convolution-filter";
import {DropShadowFilter} from "./drop-shadow-filter";
import {GlowFilter} from "./glow-filter";
import {GradientBevelFilter} from "./gradient-bevel-filter";
import {GradientGlowFilter} from "./gradient-glow-filter";

export type Filter =
  BevelFilter
  | BlurFilter
  | ColorMatrixFilter
  | ConvolutionFilter
  | DropShadowFilter
  | GlowFilter
  | GradientBevelFilter
  | GradientGlowFilter;

export namespace Filter {
  export type Json =
    BevelFilter.Json
    | BlurFilter.Json
    | ColorMatrixFilter.Json
    | ConvolutionFilter.Json
    | DropShadowFilter.Json
    | GlowFilter.Json
    | GradientBevelFilter.Json
    | GradientGlowFilter.Json;

  export const type: TaggedUnionType<Filter> = new TaggedUnionType<Filter>({
    variants: [
      BevelFilter.type,
      BlurFilter.type,
      ColorMatrixFilter.type,
      ConvolutionFilter.type,
      DropShadowFilter.type,
      GlowFilter.type,
      GradientBevelFilter.type,
      GradientGlowFilter.type,
    ],
    tag: "filterId",
  });
}
