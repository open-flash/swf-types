import { $Sint16 } from "kryo/lib/integer.js";
import { $Uint16 } from "kryo/lib/integer.js";
import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
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
