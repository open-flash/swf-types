import { CaseStyle } from "kryo";
import { $Bytes } from "kryo/bytes";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { _Tag } from "./_tag.mjs";
import { $TagType, TagType } from "./_type.mjs";

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
