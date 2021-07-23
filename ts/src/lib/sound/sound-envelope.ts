import { CaseStyle } from "kryo";
import { $Uint16, $Uint32 } from "kryo/integer";
import { RecordIoType, RecordType } from "kryo/record";
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
