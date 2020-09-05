import { $Uint16 } from "kryo/lib/integer.js";
import { $Uint32 } from "kryo/lib/integer.js";
import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Uint16, Uint32 } from "semantic-types";

export interface TagHeader {
  code: Uint16;
  length: Uint32;
}

export const $TagHeader: RecordIoType<TagHeader> = new RecordType<TagHeader>({
  properties: {
    code: {type: $Uint16},
    length: {type: $Uint32},
  },
  changeCase: CaseStyle.SnakeCase,
});
