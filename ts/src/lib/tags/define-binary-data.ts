import { $Bytes } from "kryo/lib/bytes.js";
import { $Uint16 } from "kryo/lib/integer.js";
import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { Uint16 } from "semantic-types";
import { _Tag } from "./_tag.js";
import { $TagType, TagType } from "./_type.js";

export interface DefineBinaryData extends _Tag {
  readonly type: TagType.DefineBinaryData;
  readonly id: Uint16;
  readonly data: Uint8Array;
}

export const $DefineBinaryData: RecordIoType<DefineBinaryData> = new RecordType<DefineBinaryData>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DefineBinaryData as TagType.DefineBinaryData})},
    id: {type: $Uint16},
    data: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
});
