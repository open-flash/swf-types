import { CaseStyle } from "kryo";
import { $Boolean } from "kryo/lib/boolean.js";
import { $Bytes } from "kryo/lib/bytes.js";
import { $Uint16 } from "kryo/lib/integer.js";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Ucs2StringType } from "kryo/lib/ucs2-string.js";
import { Uint16 } from "semantic-types";

import { _Tag } from "./_tag.js";
import { $TagType, TagType } from "./_type.js";

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
