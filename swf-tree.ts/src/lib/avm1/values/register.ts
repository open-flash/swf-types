import { $Uint8 } from "kryo/builtins/uint8";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Uint8 } from "semantic-types";
import { $ValueType, ValueType } from "../value-type";

export interface Register {
  type: ValueType.Register;
  value: Uint8;
}

export const $Register: DocumentIoType<Register> = new DocumentType<Register>({
  properties: {
    type: {type: new LiteralType({type: $ValueType, value: ValueType.Register as ValueType.Register})},
    value: {type: $Uint8},
  },
  changeCase: CaseStyle.SnakeCase,
});
