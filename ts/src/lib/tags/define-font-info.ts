import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/lib/array.js";
import { $Boolean } from "kryo/lib/boolean.js";
import { $Uint16 } from "kryo/lib/integer.js";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Ucs2StringType } from "kryo/lib/ucs2-string.js";
import { Uint16 } from "semantic-types";

import { $LanguageCode, LanguageCode } from "../language-code.js";
import { _Tag } from "./_tag.js";
import { $TagType, TagType } from "./_type.js";

export interface DefineFontInfo extends _Tag {
  readonly type: TagType.DefineFontInfo;
  readonly fontId: Uint16;
  readonly fontName: string;
  readonly isBold: boolean;
  readonly isItalic: boolean;
  readonly isAnsi: boolean;
  readonly isShiftJis: boolean;
  readonly isSmall: boolean;
  readonly language: LanguageCode;
  readonly codeUnits: ReadonlyArray<Uint16>;
}

export const $DefineFontInfo: RecordIoType<DefineFontInfo> = new RecordType<DefineFontInfo>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DefineFontInfo as TagType.DefineFontInfo})},
    fontId: {type: $Uint16},
    fontName: {type: new Ucs2StringType({maxLength: Infinity})},
    isBold: {type: $Boolean},
    isItalic: {type: $Boolean},
    isAnsi: {type: $Boolean},
    isShiftJis: {type: $Boolean},
    isSmall: {type: $Boolean},
    language: {type: $LanguageCode},
    codeUnits: {type: new ArrayType({itemType: $Uint16, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
