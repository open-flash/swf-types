import { CaseStyle } from "kryo";
import { $Uint16 } from "kryo/lib/integer.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Ucs2StringType } from "kryo/lib/ucs2-string.js";
import { Uint16 } from "semantic-types";

export interface NamedId {
  id: Uint16;
  name: string;
}

export const $NamedId: RecordIoType<NamedId> = new RecordType<NamedId>({
  properties: {
    id: {type: $Uint16},
    name: {type: new Ucs2StringType({maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
