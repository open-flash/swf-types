import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/array";
import { $Boolean } from "kryo/boolean";
import { $Uint16 } from "kryo/integer";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Ucs2StringType } from "kryo/ucs2-string";
import { Uint16 } from "semantic-types";

import { $LanguageCode, LanguageCode } from "../language-code.mjs";
import { _Tag } from "./_tag.mjs";
import { $TagType, TagType } from "./_type.mjs";

export interface DefineFontInfo extends _Tag {
  readonly type: TagType.DefineFontInfo;
  readonly fontId: Uint16;
  readonly fontName: string;
  readonly isBold: boolean;
  readonly isItalic: boolean;
  readonly isAnsi: boolean;
  readonly isSmall: boolean;
  readonly isShiftJis: boolean;
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
    isSmall: {type: $Boolean},
    isShiftJis: {type: $Boolean},
    language: {type: $LanguageCode},
    codeUnits: {type: new ArrayType({itemType: $Uint16, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
