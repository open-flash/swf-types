import { CaseStyle } from "kryo";
import { $Bytes } from "kryo/lib/bytes.js";
import { $Sint16, $Uint32 } from "kryo/lib/integer.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Sint16, Uint32 } from "semantic-types";

export interface AdpcmMonoPacket {
  initialSample: Sint16;
  initialIndex: Uint32;
  adpcmCodeData: Uint8Array;
}

export const $AdpcmMonoPacket: RecordIoType<AdpcmMonoPacket> = new RecordType<AdpcmMonoPacket>({
  properties: {
    initialSample: {type: $Sint16},
    initialIndex: {type: $Uint32},
    adpcmCodeData: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
});
