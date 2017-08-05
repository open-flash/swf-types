import {TaggedUnionType} from "kryo";
import * as fills from "./fill-styles/index";

export type FillStyle =
  fills.Bitmap
  | fills.FocalGradient
  | fills.LinearGradient
  | fills.RadialGradient
  | fills.Solid;

export namespace FillStyle {
  export type Json =
    fills.Bitmap.Json
    | fills.FocalGradient.Json
    | fills.LinearGradient.Json
    | fills.RadialGradient.Json
    | fills.Solid.Json;

  export const type: TaggedUnionType<FillStyle> = new TaggedUnionType<FillStyle>({
    variants: [
      fills.Bitmap.type,
      fills.FocalGradient.type,
      fills.LinearGradient.type,
      fills.RadialGradient.type,
      fills.Solid.type,
    ],
    tag: "type",
  });
}
