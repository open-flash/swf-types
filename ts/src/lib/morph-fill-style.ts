import { TaggedUnionType } from "kryo/tagged-union";

import * as fillStyles from "./fill-styles/index.js";

export type MorphFillStyle =
  fillStyles.MorphBitmap
  | fillStyles.MorphFocalGradient
  | fillStyles.MorphLinearGradient
  | fillStyles.MorphRadialGradient
  | fillStyles.MorphSolid;

export const $MorphFillStyle: TaggedUnionType<MorphFillStyle> = new TaggedUnionType<MorphFillStyle>({
  variants: [
    fillStyles.$MorphBitmap,
    fillStyles.$MorphFocalGradient,
    fillStyles.$MorphLinearGradient,
    fillStyles.$MorphRadialGradient,
    fillStyles.$MorphSolid,
  ],
  tag: "type",
});
