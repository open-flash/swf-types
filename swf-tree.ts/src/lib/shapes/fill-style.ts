import {TaggedUnionType} from "kryo";
import {ClippedBitmapFill} from "./clipped-bitmap-fill";
import {FocalRadialGradientFill} from "./focal-radial-gradient-fill";
import {LinearGradientFill} from "./linear-gradient-fill";
import {NonSmoothedClippedBitmapFill} from "./non-smoothed-clipped-bitmap-fill";
import {NonSmoothedRepeatingBitmapFill} from "./non-smoothed-repeating-bitmap-fill";
import {RadialGradientFill} from "./radial-gradient-fill";
import {RepeatingBitmapFill} from "./repeating-bitmap-fill";
import {SolidFill} from "./solid-fill";

export type FillStyle =
  ClippedBitmapFill
  | FocalRadialGradientFill
  | LinearGradientFill
  | NonSmoothedClippedBitmapFill
  | NonSmoothedRepeatingBitmapFill
  | RadialGradientFill
  | RepeatingBitmapFill
  | SolidFill;

export namespace FillStyle {
  export type Json =
    ClippedBitmapFill.Json
    | FocalRadialGradientFill.Json
    | LinearGradientFill.Json
    | NonSmoothedClippedBitmapFill.Json
    | NonSmoothedRepeatingBitmapFill.Json
    | RadialGradientFill.Json
    | RepeatingBitmapFill.Json
    | SolidFill.Json;

  export const type: TaggedUnionType<FillStyle> = new TaggedUnionType<FillStyle>({
    variants: [
      ClippedBitmapFill.type,
      FocalRadialGradientFill.type,
      LinearGradientFill.type,
      NonSmoothedClippedBitmapFill.type,
      NonSmoothedRepeatingBitmapFill.type,
      RadialGradientFill.type,
      RepeatingBitmapFill.type,
      SolidFill.type,
    ],
    tag: "fillStyleType",
  });
}
