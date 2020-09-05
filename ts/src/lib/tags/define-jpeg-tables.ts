import { CaseStyle } from "kryo";
import { $Bytes } from "kryo/lib/bytes.js";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";

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
