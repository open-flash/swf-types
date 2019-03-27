import { $Boolean } from "kryo/builtins/boolean";
import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Ucs2StringType } from "kryo/types/ucs2-string";
import { Uint16 } from "semantic-types";
import { $LanguageCode, LanguageCode } from "../language-code";
import { _Tag } from "../tags/_tag";
import { $TagType, TagType } from "../tags/_type";

export interface DefineFontInfo extends _Tag {
  readonly type: TagType.DefineFontInfo;
  readonly fontId: Uint16;
  readonly fontName: string;
  readonly isSmall: boolean;
  readonly isShiftJis: boolean;
  readonly isAnsi: boolean;
  readonly isItalic: boolean;
  readonly isBold: boolean;
  readonly language?: LanguageCode;
  readonly codeUnits: ReadonlyArray<Uint16>;
}

export const $DefineFontInfo: DocumentIoType<DefineFontInfo> = new DocumentType<DefineFontInfo>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DefineFontInfo as TagType.DefineFontInfo})},
    fontId: {type: $Uint16},
    fontName: {type: new Ucs2StringType({maxLength: Infinity})},
    isSmall: {type: $Boolean},
    isShiftJis: {type: $Boolean},
    isAnsi: {type: $Boolean},
    isItalic: {type: $Boolean},
    isBold: {type: $Boolean},
    language: {type: $LanguageCode, optional: true},
    codeUnits: {type: new ArrayType({itemType: $Uint16, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
