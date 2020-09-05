import { CaseStyle } from "kryo";
import { $Uint32 } from "kryo/lib/integer.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Ucs2StringType } from "kryo/lib/ucs2-string.js";
import { Uint32 } from "semantic-types";

export interface AbcHeader {
  readonly flags: Uint32;
  readonly name: string;
}

export const $AbcHeader: RecordIoType<AbcHeader> = new RecordType<AbcHeader>({
  properties: {
    flags: {type: $Uint32},
    name: {type: new Ucs2StringType({maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
