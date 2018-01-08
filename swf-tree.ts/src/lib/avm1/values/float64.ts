import { CaseStyle, DocumentType, Float64Type, LiteralType } from "kryo";
import {Float64 as Float64Primitive } from "semantic-types";
import { ValueType } from "../value-type";

export interface Float64 {
  type: ValueType.Float64;
  value: Float64Primitive;
}

export namespace Float64 {
  export interface Json {
    type: "float64";
    value: number;
  }

  export const type: DocumentType<Float64> = new DocumentType<Float64>({
    properties: {
      type: {type: new LiteralType({type: ValueType.type, value: ValueType.Float64})},
      value: {type: new Float64Type()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
