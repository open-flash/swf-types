import { CaseStyle } from "kryo";
import { $Uint16 } from "kryo/integer";
import { RecordIoType, RecordType } from "kryo/record";
import { Ucs2StringType } from "kryo/ucs2-string";
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
