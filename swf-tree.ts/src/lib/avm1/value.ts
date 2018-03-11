import { TaggedUnionType } from "kryo/types/tagged-union";
import * as values from "./values/index";

export type Value =
  values.Boolean
  | values.String
  | values.Constant
  | values.Float32
  | values.Float64
  | values.Sint32
  | values.Null
  | values.Register
  | values.Undefined;

export const $Value: TaggedUnionType<Value> = new TaggedUnionType<Value>(() => ({
  variants: [
    values.$Boolean,
    values.$String,
    values.$Constant,
    values.$Float32,
    values.$Float64,
    values.$Sint32,
    values.$Null,
    values.$Register,
    values.$Undefined,
  ],
  tag: "type",
}));
