import { TaggedUnionType } from "kryo/lib/tagged-union.js";

import * as fillStyles from "./fill-styles/index.js";

export type FillStyle =
  fillStyles.Bitmap
  | fillStyles.FocalGradient
  | fillStyles.LinearGradient
  | fillStyles.RadialGradient
  | fillStyles.Solid;

export const $FillStyle: TaggedUnionType<FillStyle> = new TaggedUnionType<FillStyle>({
  variants: [
    fillStyles.$Bitmap,
    fillStyles.$FocalGradient,
    fillStyles.$LinearGradient,
    fillStyles.$RadialGradient,
    fillStyles.$Solid,
  ],
  tag: "type",
});
