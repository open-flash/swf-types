import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Float64Type } from "kryo/types/float64";
import { LiteralType } from "kryo/types/literal";
import { Float32 as _Float32 } from "semantic-types";
import { $ValueType, ValueType } from "../value-type";

export interface Float32 {
  type: ValueType.Float32;
  value: _Float32;
}

export const $Float32: DocumentIoType<Float32> = new DocumentType<Float32>({
  properties: {
    type: {type: new LiteralType({type: $ValueType, value: ValueType.Float32 as ValueType.Float32})},
    value: {type: new Float64Type()},
  },
  changeCase: CaseStyle.SnakeCase,
});
