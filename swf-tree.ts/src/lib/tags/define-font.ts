import { $Boolean } from "kryo/builtins/boolean";
import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Ucs2StringType } from "kryo/types/ucs2-string";
import { Uint16 } from "semantic-types";
import { $Glyph, Glyph } from "../glyph";
import { $LanguageCode, LanguageCode } from "../language-code";
import { $FontLayout, FontLayout } from "../text/font-layout";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface DefineFont extends _Tag {
  type: TagType.DefineFont;
  id: Uint16;
  fontName: string;
  isBold: boolean;
  isItalic: boolean;
  isAnsi: boolean;
  isSmall: boolean;
  isShiftJis: boolean;
  language: LanguageCode;
  glyphs?: Glyph[];
  codeUnits?: Uint16[];
  layout?: FontLayout;
}

export const $DefineFont: DocumentIoType<DefineFont> = new DocumentType<DefineFont>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DefineFont as TagType.DefineFont})},
    id: {type: $Uint16},
    fontName: {type: new Ucs2StringType({maxLength: Infinity})},
    isBold: {type: $Boolean},
    isItalic: {type: $Boolean},
    isAnsi: {type: $Boolean},
    isSmall: {type: $Boolean},
    isShiftJis: {type: $Boolean},
    language: {type: $LanguageCode},
    glyphs: {type: new ArrayType({itemType: $Glyph, maxLength: Infinity}), optional: true},
    codeUnits: {type: new ArrayType({itemType: $Uint16, maxLength: Infinity}), optional: true},
    layout: {type: $FontLayout, optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
});
