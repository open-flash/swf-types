import {TaggedUnionType} from "kryo";
import * as fills from "./fills/index";

export type FillStyle =
  fills.ClippedBitmap
  | fills.FocalRadialGradient
  | fills.LinearGradient
  | fills.NonSmoothedClippedBitmap
  | fills.NonSmoothedRepeatingBitmap
  | fills.RadialGradient
  | fills.RepeatingBitmap
  | fills.Solid;

export namespace FillStyle {
  export type Json =
    fills.ClippedBitmap.Json
    | fills.FocalRadialGradient.Json
    | fills.LinearGradient.Json
    | fills.NonSmoothedClippedBitmap.Json
    | fills.NonSmoothedRepeatingBitmap.Json
    | fills.RadialGradient.Json
    | fills.RepeatingBitmap.Json
    | fills.Solid.Json;

  export const type: TaggedUnionType<FillStyle> = new TaggedUnionType<FillStyle>({
    variants: [
      fills.ClippedBitmap.type,
      fills.FocalRadialGradient.type,
      fills.LinearGradient.type,
      fills.NonSmoothedClippedBitmap.type,
      fills.NonSmoothedRepeatingBitmap.type,
      fills.RadialGradient.type,
      fills.RepeatingBitmap.type,
      fills.Solid.type,
    ],
    tag: "type",
  });
}
