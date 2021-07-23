import { CaseStyle } from "kryo";
import { $Uint32 } from "kryo/integer";
import { RecordIoType, RecordType } from "kryo/record";
import { Ucs2StringType } from "kryo/ucs2-string";
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
