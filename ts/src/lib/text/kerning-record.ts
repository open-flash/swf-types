import { CaseStyle } from "kryo";
import { $Sint16, $Uint16 } from "kryo/integer";
import { RecordIoType, RecordType } from "kryo/record";
import { Sint16, Uint16 } from "semantic-types";

export interface KerningRecord {
  left: Uint16;
  right: Uint16;
  adjustment: Sint16;
}

export const $KerningRecord: RecordIoType<KerningRecord> = new RecordType<KerningRecord>({
  properties: {
    left: {type: $Uint16},
    right: {type: $Uint16},
    adjustment: {type: $Sint16},
  },
  changeCase: CaseStyle.SnakeCase,
});
