import { CaseStyle } from "kryo";
import { $Uint16, $Uint32 } from "kryo/integer";
import { RecordIoType, RecordType } from "kryo/record";
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
