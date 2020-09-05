import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/lib/array.js";
import { $Boolean } from "kryo/lib/boolean.js";
import { $Uint16 } from "kryo/lib/integer.js";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Ucs2StringType } from "kryo/lib/ucs2-string.js";
import { Uint16 } from "semantic-types";

import { $Glyph, Glyph } from "../glyph.js";
import { $LanguageCode, LanguageCode } from "../language-code.js";
import { $EmSquareSize, EmSquareSize } from "../text/em-square-size.js";
import { $FontLayout, FontLayout } from "../text/font-layout.js";
import { _Tag } from "./_tag.js";
import { $TagType, TagType } from "./_type.js";

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
