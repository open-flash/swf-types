import { $Sint32 } from "kryo/builtins/sint32";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Sint32 as Int32Primitive } from "semantic-types";
import { $ValueType, ValueType } from "../value-type";

export interface Int32 {
  type: ValueType.Int32;
  value: Int32Primitive;
}

export const $Int32: DocumentIoType<Int32> = new DocumentType<Int32>({
  properties: {
    type: {type: new LiteralType({type: $ValueType, value: ValueType.Int32 as ValueType.Int32})},
    value: {type: $Sint32},
  },
  changeCase: CaseStyle.SnakeCase,
});
