import {ArrayType, BooleanType, CaseStyle, DocumentType, IntegerType, LiteralType, Ucs2StringType} from "kryo";
import {Uint16} from "semantic-types";
import {LanguageCode} from "../language-code";
import {_Tag} from "../tags/_tag";
import {TagType} from "../tags/_type";

export interface DefineFontInfo extends _Tag {
  type: TagType.DefineFontInfo;
  fontId: Uint16;
  fontName: string;
  isSmall: boolean;
  isShiftJis: boolean;
  isAnsi: boolean;
  isItalic: boolean;
  isBold: boolean;
  language?: LanguageCode;
  codeUnits: Uint16[];
}

export namespace DefineFontInfo {
  export interface Json {
    type: "define-font-info";
    font_id: number;
    font_name: string;
    is_small: boolean;
    is_shift_jis: boolean;
    is_ansi: boolean;
    is_italic: boolean;
    is_bold: boolean;
    language?: LanguageCode.Json;
    code_units: number[];
  }

  export const type: DocumentType<DefineFontInfo> = new DocumentType<DefineFontInfo>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.DefineFontInfo})},
      fontId: {type: new IntegerType()},
      fontName: {type: new Ucs2StringType({maxLength: Infinity})},
      isSmall: {type: new BooleanType()},
      isShiftJis: {type: new BooleanType()},
      isAnsi: {type: new BooleanType()},
      isItalic: {type: new BooleanType()},
      isBold: {type: new BooleanType()},
      language: {type: LanguageCode.type, optional: true},
      codeUnits: {type: new ArrayType({itemType: new IntegerType(), maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
