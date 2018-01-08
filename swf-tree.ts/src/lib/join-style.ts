import { TaggedUnionType } from "kryo";
import * as joinStyles from "./join-styles/index";

export type JoinStyle =
  joinStyles.Bevel
  | joinStyles.Miter
  | joinStyles.Round;

export namespace JoinStyle {
  export type Json =
    joinStyles.Bevel.Json
    | joinStyles.Miter.Json
    | joinStyles.Round.Json;

  export const type: TaggedUnionType<JoinStyle> = new TaggedUnionType<JoinStyle>({
    variants: [
      joinStyles.Bevel.type,
      joinStyles.Miter.type,
      joinStyles.Round.type,
    ],
    tag: "type",
  });
}
