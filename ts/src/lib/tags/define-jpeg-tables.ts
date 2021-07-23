import { CaseStyle } from "kryo";
import { $Bytes } from "kryo/bytes";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { _Tag } from "./_tag.js";
import { $TagType, TagType } from "./_type.js";

export interface DefineJpegTables extends _Tag {
  readonly type: TagType.DefineJpegTables;
  readonly data: Uint8Array;
}

export const $DefineJpegTables: RecordIoType<DefineJpegTables> = new RecordType<DefineJpegTables>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DefineJpegTables as TagType.DefineJpegTables})},
    data: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
});
