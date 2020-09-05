import { $Bytes } from "kryo/lib/bytes.js";
import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { _Tag } from "./_tag.js";
import { $TagType, TagType } from "./_type.js";

export interface Raw extends _Tag {
  readonly type: TagType.Raw;
  readonly data: Uint8Array;
}

export const $Raw: RecordIoType<Raw> = new RecordType<Raw>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.Raw as TagType.Raw})},
    data: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
});
