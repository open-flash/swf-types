import {DocumentType, TaggedUnionType} from "kryo";
import * as morphFillStyles from "./morph-fill-styles/index";

export type MorphFillStyle =
  morphFillStyles.Bitmap
  | morphFillStyles.FocalGradient
  | morphFillStyles.LinearGradient
  | morphFillStyles.RadialGradient
  | morphFillStyles.Solid;

export namespace MorphFillStyle {
  export type Json =
    morphFillStyles.Bitmap.Json
    | morphFillStyles.FocalGradient.Json
    | morphFillStyles.LinearGradient.Json
    | morphFillStyles.RadialGradient.Json
    | morphFillStyles.Solid.Json;

  export const type: TaggedUnionType<MorphFillStyle> = new TaggedUnionType<MorphFillStyle>({
    variants: <DocumentType<MorphFillStyle>[]> [
      morphFillStyles.Bitmap.type,
      morphFillStyles.FocalGradient.type,
      morphFillStyles.LinearGradient.type,
      morphFillStyles.RadialGradient.type,
      morphFillStyles.Solid.type,
    ],
    tag: "type",
  });
}
