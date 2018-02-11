import { TaggedUnionType } from "kryo/types/tagged-union";
import * as values from "./values/index";

export type Value =
  values.Boolean
  | values.CString
  | values.Constant
  | values.Float32
  | values.Float64
  | values.Int32
  | values.Null
  | values.Register
  | values.Undefined;

export const $Value: TaggedUnionType<Value> = new TaggedUnionType<Value>(() => ({
  variants: [
    values.$Boolean,
    values.$CString,
    values.$Constant,
    values.$Float32,
    values.$Float64,
    values.$Int32,
    values.$Null,
    values.$Register,
    values.$Undefined,
  ],
  tag: "type",
}));
