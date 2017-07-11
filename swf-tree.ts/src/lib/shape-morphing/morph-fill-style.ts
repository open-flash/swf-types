import {TaggedUnionType} from "kryo";
import {ClippedBitmapMorphFill} from "./clipped-bitmap-morph-fill";
import {FocalRadialGradientMorphFill} from "./focal-radial-gradient-morph-fill";
import {LinearGradientMorphFill} from "./linear-gradient-morph-fill";
import {NonSmoothedClippedBitmapMorphFill} from "./non-smoothed-clipped-bitmap-morph-fill";
import {NonSmoothedRepeatingBitmapMorphFill} from "./non-smoothed-repeating-bitmap-morph-fill";
import {RadialGradientMorphFill} from "./radial-gradient-morph-fill";
import {RepeatingBitmapMorphFill} from "./repeating-bitmap-morph-fill";
import {SolidMorphFill} from "./solid-morph-fill";

export type MorphFillStyle =
  ClippedBitmapMorphFill
  | FocalRadialGradientMorphFill
  | LinearGradientMorphFill
  | NonSmoothedClippedBitmapMorphFill
  | NonSmoothedRepeatingBitmapMorphFill
  | RadialGradientMorphFill
  | RepeatingBitmapMorphFill
  | SolidMorphFill;

export namespace MorphFillStyle {
  export type Json =
    ClippedBitmapMorphFill.Json
    | FocalRadialGradientMorphFill.Json
    | LinearGradientMorphFill.Json
    | NonSmoothedClippedBitmapMorphFill.Json
    | NonSmoothedRepeatingBitmapMorphFill.Json
    | RadialGradientMorphFill.Json
    | RepeatingBitmapMorphFill.Json
    | SolidMorphFill.Json;

  export const type: TaggedUnionType<MorphFillStyle> = new TaggedUnionType<MorphFillStyle>({
    variants: [
      ClippedBitmapMorphFill.type,
      FocalRadialGradientMorphFill.type,
      LinearGradientMorphFill.type,
      NonSmoothedClippedBitmapMorphFill.type,
      NonSmoothedRepeatingBitmapMorphFill.type,
      RadialGradientMorphFill.type,
      RepeatingBitmapMorphFill.type,
      SolidMorphFill.type,
    ],
    tag: "fillStypeType",
  });
}
