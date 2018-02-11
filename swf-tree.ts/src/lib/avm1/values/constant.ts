import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Uint16 } from "semantic-types";
import { $ValueType, ValueType } from "../value-type";

export interface Constant {
  type: ValueType.Constant;
  value: Uint16;
}

export const $Constant: DocumentIoType<Constant> = new DocumentType<Constant>({
  properties: {
    type: {type: new LiteralType({type: $ValueType, value: ValueType.Constant as ValueType.Constant})},
    value: {type: $Uint16},
  },
  changeCase: CaseStyle.SnakeCase,
});
