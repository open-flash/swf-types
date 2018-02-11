import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ValueType, ValueType } from "../value-type";

export interface Undefined {
  type: ValueType.Undefined;
}

export const $Undefined: DocumentIoType<Undefined> = new DocumentType<Undefined>({
  properties: {
    type: {type: new LiteralType({type: $ValueType, value: ValueType.Undefined as ValueType.Undefined})},
  },
  changeCase: CaseStyle.SnakeCase,
});
