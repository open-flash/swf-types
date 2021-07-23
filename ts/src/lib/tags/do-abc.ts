import { CaseStyle } from "kryo";
import { $Bytes } from "kryo/bytes";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { $AbcHeader, AbcHeader } from "../control/abc-header.js";
import { _Tag } from "./_tag.js";
import { $TagType, TagType } from "./_type.js";

export interface DoAbc extends _Tag {
  type: TagType.DoAbc;
  header?: AbcHeader;
  data: Uint8Array;
}

export const $DoAbc: RecordIoType<DoAbc> = new RecordType<DoAbc>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DoAbc as TagType.DoAbc})},
    header: {type: $AbcHeader, optional: true},
    data: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
});
