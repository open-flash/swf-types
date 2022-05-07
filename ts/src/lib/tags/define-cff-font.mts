import { CaseStyle } from "kryo";
import { $Boolean } from "kryo/boolean";
import { $Bytes } from "kryo/bytes";
import { $Uint16 } from "kryo/integer";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Ucs2StringType } from "kryo/ucs2-string";
import { Uint16 } from "semantic-types";

import { _Tag } from "./_tag.mjs";
import { $TagType, TagType } from "./_type.mjs";

// TODO: Rename to `DefineOtfFont`
export interface DefineCffFont extends _Tag {
  readonly type: TagType.DefineCffFont;
  readonly id: Uint16;
  readonly fontName: string;
  readonly isBold: boolean;
  readonly isItalic: boolean;
  readonly data?: Uint8Array;
}

export const $DefineCffFont: RecordIoType<DefineCffFont> = new RecordType<DefineCffFont>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DefineCffFont as TagType.DefineCffFont})},
    id: {type: $Uint16},
    fontName: {type: new Ucs2StringType({maxLength: Infinity})},
    isBold: {type: $Boolean},
    isItalic: {type: $Boolean},
    data: {type: $Bytes, optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
});
