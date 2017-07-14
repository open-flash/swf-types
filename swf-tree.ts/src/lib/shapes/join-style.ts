import {TaggedUnionType} from "kryo";
import * as joins from "./joins/index";

export type JoinStyle =
  joins.Bevel
  | joins.Miter
  | joins.Round;

export namespace JoinStyle {
  export type Json =
    joins.Bevel.Json
    | joins.Miter.Json
    | joins.Round.Json;

  export const type: TaggedUnionType<JoinStyle> = new TaggedUnionType<JoinStyle>({
    variants: [
      joins.Bevel.type,
      joins.Miter.type,
      joins.Round.type,
    ],
    tag: "type",
  });
}
