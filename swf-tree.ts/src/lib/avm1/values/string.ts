import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Ucs2StringType } from "kryo/types/ucs2-string";
import { $ValueType, ValueType } from "../value-type";

export interface String {
  type: ValueType.String;
  value: string;
}

export const $String: DocumentIoType<String> = new DocumentType<String>({
  properties: {
    type: {type: new LiteralType({type: $ValueType, value: ValueType.String as ValueType.String})},
    value: {type: new Ucs2StringType({maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
