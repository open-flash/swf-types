import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/array";
import { $Boolean } from "kryo/boolean";
import { $Uint16 } from "kryo/integer";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Ucs2StringType } from "kryo/ucs2-string";
import { Uint16 } from "semantic-types";

import { $Glyph, Glyph } from "../glyph.mjs";
import { $LanguageCode, LanguageCode } from "../language-code.mjs";
import { $EmSquareSize, EmSquareSize } from "../text/em-square-size.mjs";
import { $FontLayout, FontLayout } from "../text/font-layout.mjs";
import { _Tag } from "./_tag.mjs";
import { $TagType, TagType } from "./_type.mjs";

export interface DefineFont extends _Tag {
  readonly type: TagType.DefineFont;
  readonly id: Uint16;
  readonly fontName: string;
  readonly isBold: boolean;
  readonly isItalic: boolean;
  readonly isAnsi: boolean;
  readonly isSmall: boolean;
  readonly isShiftJis: boolean;
  readonly emSquareSize: EmSquareSize;
  readonly language: LanguageCode;
  readonly glyphs?: ReadonlyArray<Glyph>;
  readonly codeUnits?: ReadonlyArray<Uint16>;
  readonly layout?: FontLayout;
}

export const $DefineFont: RecordIoType<DefineFont> = new RecordType<DefineFont>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DefineFont as TagType.DefineFont})},
    id: {type: $Uint16},
    fontName: {type: new Ucs2StringType({maxLength: Infinity})},
    isBold: {type: $Boolean},
    isItalic: {type: $Boolean},
    isAnsi: {type: $Boolean},
    isSmall: {type: $Boolean},
    isShiftJis: {type: $Boolean},
    emSquareSize: {type: $EmSquareSize},
    language: {type: $LanguageCode},
    glyphs: {type: new ArrayType({itemType: $Glyph, maxLength: Infinity}), optional: true},
    codeUnits: {type: new ArrayType({itemType: $Uint16, maxLength: Infinity}), optional: true},
    layout: {type: $FontLayout, optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
});
