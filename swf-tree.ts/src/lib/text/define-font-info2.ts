import {ArrayType, BooleanType, CaseStyle, DocumentType, Int32Type, LiteralType, Ucs2StringType} from "kryo";
import {Uint16} from "semantic-types";
import {LanguageCode} from "../language-code";
import {_Tag} from "../tags/_tag";
import {TagType} from "../tags/_type";

export interface DefineFontInfo2 extends _Tag {
  type: TagType.DefineFontInfo2;
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
    font_id: number;
    font_name: string;
    is_small: boolean;
    is_shift_jis: boolean;
    is_ansi: boolean;
    is_italic: boolean;
    is_bold: boolean;
    language_code: LanguageCode.Json;
    code_table: number[];
  }

  export const type: DocumentType<DefineFontInfo2> = new DocumentType<DefineFontInfo2>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.DefineFontInfo2})},
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
    rename: CaseStyle.SnakeCase,
  });
}
