import {
  ArrayType,
  BooleanType,
  CaseStyle,
  DocumentType,
  IntegerType,
  LiteralType,
  Ucs2StringType,
} from "kryo";
import { Uint16, Uint32 } from "semantic-types";
import { Glyph } from "../glyph";
import { LanguageCode } from "../language-code";
import { FontLayout } from "../text/font-layout";
import { _Tag } from "./_tag";
import { TagType } from "./_type";

export interface DefineFont extends _Tag {
  type: TagType.DefineFont;
  id: Uint16;
  fontName: string;
  isSmall: boolean;
  isShiftJis: boolean;
  isAnsi: boolean;
  isItalic: boolean;
  isBold: boolean;
  language: LanguageCode;
  glyphs?: Glyph[];
  codeUnits?: Uint16[];
  layout?: FontLayout;
}

export namespace DefineFont {
  export interface Json {
    type: "define-font";
    id: number;
    font_name: string;
    is_small: boolean;
    is_shift_jis: boolean;
    is_ansi: boolean;
    is_italic: boolean;
    is_bold: boolean;
    language: LanguageCode.Json;
    glyphs?: Glyph[];
    code_units?: number[];
    layout?: FontLayout.Json;
  }

  export const type: DocumentType<DefineFont> = new DocumentType<DefineFont>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.DefineFont})},
      id: {type: new IntegerType()},
      fontName: {type: new Ucs2StringType({maxLength: Infinity})},
      isSmall: {type: new BooleanType()},
      isShiftJis: {type: new BooleanType()},
      isAnsi: {type: new BooleanType()},
      isItalic: {type: new BooleanType()},
      isBold: {type: new BooleanType()},
      language: {type: LanguageCode.type},
      glyphs: {type: new ArrayType({itemType: Glyph.type, maxLength: Infinity}), optional: true},
      codeUnits: {type: new ArrayType({itemType: new IntegerType(), maxLength: Infinity}), optional: true},
      layout: {type: FontLayout.type, optional: true},
    },
    rename: CaseStyle.SnakeCase,
  });
}
