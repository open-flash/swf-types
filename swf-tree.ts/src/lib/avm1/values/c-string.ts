import {CaseStyle, DocumentType, LiteralType, Ucs2StringType} from "kryo";
import {ValueType} from "../value-type";

export interface CString {
  type: ValueType.CString;
  value: string;
}

export namespace CString {
  export interface Json {
    type: "c-string";
    value: string;
  }

  export const type: DocumentType<CString> = new DocumentType<CString>({
    properties: {
      type: {type: new LiteralType({type: ValueType.type, value: ValueType.CString})},
      value: {type: new Ucs2StringType({maxLength: Infinity})},
    },
    rename: CaseStyle.KebabCase,
  });
}
