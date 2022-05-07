import { CaseStyle } from "kryo";
import { $Bytes } from "kryo/bytes";
import { $Sint16, $Uint32 } from "kryo/integer";
import { RecordIoType, RecordType } from "kryo/record";
import { Sint16, Uint32 } from "semantic-types";

export interface AdpcmStereoPacket {
  initialSampleLeft: Sint16;
  initialIndexLeft: Uint32;
  initialSampleRight: Sint16;
  initialIndexRight: Uint32;
  adpcmCodeData: Uint8Array;
}

export const $AdpcmStereoPacket: RecordIoType<AdpcmStereoPacket> = new RecordType<AdpcmStereoPacket>({
  properties: {
    initialSampleLeft: {type: $Sint16},
    initialIndexLeft: {type: $Uint32},
    initialSampleRight: {type: $Sint16},
    initialIndexRight: {type: $Uint32},
    adpcmCodeData: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
});
