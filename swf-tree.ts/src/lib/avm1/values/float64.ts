import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Float64Type } from "kryo/types/float64";
import { LiteralType } from "kryo/types/literal";
import { Float64 as _Float64 } from "semantic-types";
import { $ValueType, ValueType } from "../value-type";

export interface Float64 {
  type: ValueType.Float64;
  value: _Float64;
}

export const $Float64: DocumentIoType<Float64> = new DocumentType<Float64>({
  properties: {
    type: {type: new LiteralType({type: $ValueType, value: ValueType.Float64 as ValueType.Float64})},
    value: {type: new Float64Type()},
  },
  changeCase: CaseStyle.SnakeCase,
});
