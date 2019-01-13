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
  readonly type: TagType.DefineFont;
  readonly id: Uint16;
  readonly fontName: string;
  readonly isBold: boolean;
  readonly isItalic: boolean;
  readonly isAnsi: boolean;
  readonly isSmall: boolean;
  readonly isShiftJis: boolean;
  readonly language: LanguageCode;
  readonly glyphs?: ReadonlyArray<Glyph>;
  readonly codeUnits?: ReadonlyArray<Uint16>;
  readonly layout?: FontLayout;
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
