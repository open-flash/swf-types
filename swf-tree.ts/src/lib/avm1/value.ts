import { TaggedUnionType } from "kryo";
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

export namespace Value {
  export type Json =
    values.Boolean.Json
    | values.CString.Json
    | values.Constant.Json
    | values.Float32.Json
    | values.Float64.Json
    | values.Int32.Json
    | values.Null.Json
    | values.Register.Json
    | values.Undefined.Json;

  export const type: TaggedUnionType<Value> = new TaggedUnionType<Value>({
    variants: [
      values.Boolean.type,
      values.CString.type,
      values.Constant.type,
      values.Float32.type,
      values.Float64.type,
      values.Int32.type,
      values.Null.type,
      values.Register.type,
      values.Undefined.type,
    ],
    tag: "type",
  });
}
