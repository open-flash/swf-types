import { TaggedUnionType } from "kryo/lib/tagged-union.js";

import * as joinStyles from "./join-styles/index.js";

export type JoinStyle =
  joinStyles.Bevel
  | joinStyles.Miter
  | joinStyles.Round;

export const $JoinStyle: TaggedUnionType<JoinStyle> = new TaggedUnionType<JoinStyle>({
  variants: [
    joinStyles.$Bevel,
    joinStyles.$Miter,
    joinStyles.$Round,
  ],
  tag: "type",
});
