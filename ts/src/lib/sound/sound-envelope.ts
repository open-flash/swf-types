import { $Uint16 } from "kryo/lib/integer.js";
import { $Uint32 } from "kryo/lib/integer.js";
import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Uint16, Uint32 } from "semantic-types";

export interface SoundEnvelope {
  pos44: Uint32;
  leftLevel: Uint16;
  rightLevel: Uint16;
}

export const $SoundEnvelope: RecordIoType<SoundEnvelope> = new RecordType<SoundEnvelope>({
  properties: {
    pos44: {type: $Uint32},
    leftLevel: {type: $Uint16},
    rightLevel: {type: $Uint16},
  },
  changeCase: CaseStyle.SnakeCase,
});
