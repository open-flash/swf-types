import { TaggedUnionType } from "kryo/types/tagged-union";
import * as joinStyles from "./join-styles/index";

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
