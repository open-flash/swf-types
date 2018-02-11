import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ValueType, ValueType } from "../value-type";

export interface Null {
  type: ValueType.Null;
}

export const $Null: DocumentIoType<Null> = new DocumentType<Null>({
  properties: {
    type: {type: new LiteralType({type: $ValueType, value: ValueType.Null as ValueType.Null})},
  },
  changeCase: CaseStyle.SnakeCase,
});
