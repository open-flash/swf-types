import { TaggedUnionType } from "kryo/types/tagged-union";
import * as morphFillStyles from "./morph-fill-styles/index";

export type MorphFillStyle =
  morphFillStyles.Bitmap
  | morphFillStyles.FocalGradient
  | morphFillStyles.LinearGradient
  | morphFillStyles.RadialGradient
  | morphFillStyles.Solid;

export const $MorphFillStyle: TaggedUnionType<MorphFillStyle> = new TaggedUnionType<MorphFillStyle>({
  variants: [
    morphFillStyles.$Bitmap,
    morphFillStyles.$FocalGradient,
    morphFillStyles.$LinearGradient,
    morphFillStyles.$RadialGradient,
    morphFillStyles.$Solid,
  ],
  tag: "type",
});
