import {CaseStyle, SimpleEnumType} from "kryo";

export enum ValueType {
  CString,
  Float32,
  Null,
  Undefined,
  Register,
  Boolean,
  Float64,
  Int32,
  Constant,
}

export namespace ValueType {
  export type Json =
    "c-string"
    | "float32"
    | "null"
    | "undefined"
    | "register"
    | "boolean"
    | "float64"
    | "int32"
    | "constant";

  export const type: SimpleEnumType<ValueType> = new SimpleEnumType<ValueType>({
    enum: ValueType,
    rename: CaseStyle.KebabCase,
  });
}
