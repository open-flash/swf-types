import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/array";
import { $Boolean } from "kryo/boolean";
import { $Uint16, $Uint32 } from "kryo/integer";
import { RecordIoType, RecordType } from "kryo/record";
import { Uint16, Uint32 } from "semantic-types";

import { $SoundEnvelope, SoundEnvelope } from "./sound-envelope.mjs";

export interface SoundInfo {
  syncStop: boolean;
  syncNoMultiple: boolean;
  inPoint?: Uint32;
  outPoint?: Uint32;
  loopCount?: Uint16;
  envelopeRecords?: SoundEnvelope[];
}

export const $SoundInfo: RecordIoType<SoundInfo> = new RecordType<SoundInfo>({
  properties: {
    syncStop: {type: $Boolean},
    syncNoMultiple: {type: $Boolean},
    inPoint: {type: $Uint32, optional: true},
    outPoint: {type: $Uint32, optional: true},
    loopCount: {type: $Uint16, optional: true},
    envelopeRecords: {type: new ArrayType({itemType: $SoundEnvelope, maxLength: Infinity}), optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
});
