import {ArrayType, BooleanType, CaseStyle, DocumentType, Int32Type, LiteralType, Ucs2StringType} from "kryo";
import {LanguageCode} from "../basic-types/language-code";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";
import {Uint16} from "semantic-types";

export interface DefineFontInfo2 extends SwfTagBase {
  type: SwfTagType.DefineFontInfo2;
  fontId: Uint16;
  fontName: string;
  isSmall: boolean;
  isShiftJis: boolean;
  isAnsi: boolean;
  isItalic: boolean;
  isBold: boolean;
  languageCode: LanguageCode;
  codeTable: Uint16[];
}

export namespace DefineFontInfo2 {
  export interface Json {
    type: "define-font-info2";
    "font-id": number;
    "font-name": string;
    "is-small": boolean;
    "is-shift-jis": boolean;
    "is-ansi": boolean;
    "is-italic": boolean;
    "is-bold": boolean;
    "language-code": LanguageCode.Json;
    "code-table": number[];
  }

  export const type: DocumentType<DefineFontInfo2> = new DocumentType<DefineFontInfo2>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.DefineFontInfo2})},
      fontId: {type: new Int32Type()},
      fontName: {type: new Ucs2StringType({maxLength: Infinity})},
      isSmall: {type: new BooleanType()},
      isShiftJis: {type: new BooleanType()},
      isAnsi: {type: new BooleanType()},
      isItalic: {type: new BooleanType()},
      isBold: {type: new BooleanType()},
      languageCode: {type: LanguageCode.type},
      codeTable: {type: new ArrayType({itemType: new Int32Type(), maxLength: Infinity})},
    },
    rename: CaseStyle.KebabCase,
  });
}
