import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Ucs2StringType } from "kryo/types/ucs2-string";
import { $ValueType, ValueType } from "../value-type";

export interface CString {
  type: ValueType.CString;
  value: string;
}

export const $CString: DocumentIoType<CString> = new DocumentType<CString>({
  properties: {
    type: {type: new LiteralType({type: $ValueType, value: ValueType.CString as ValueType.CString})},
    value: {type: new Ucs2StringType({maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
