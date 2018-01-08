import { CaseStyle, DocumentType, Float64Type, LiteralType } from "kryo";
import {Float32 as Float32Primitive } from "semantic-types";
import { ValueType } from "../value-type";

export interface Float32 {
  type: ValueType.Float32;
  value: Float32Primitive;
}

export namespace Float32 {
  export interface Json {
    type: "float32";
    value: number;
  }

  export const type: DocumentType<Float32> = new DocumentType<Float32>({
    properties: {
      type: {type: new LiteralType({type: ValueType.type, value: ValueType.Float32})},
      value: {type: new Float64Type()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
