import { CaseStyle } from "kryo";
import { $Bytes } from "kryo/lib/bytes.js";
import { $Uint8 } from "kryo/lib/integer.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Uint8 } from "semantic-types";

export interface Vp6FlvVideoPacket {
  horizontalAdjustment: Uint8;
  verticalAdjustment: Uint8;
  data: Uint8Array;
}

export const $Vp6FlvVideoPacket: RecordIoType<Vp6FlvVideoPacket> = new RecordType<Vp6FlvVideoPacket>({
  properties: {
    horizontalAdjustment: {type: $Uint8},
    verticalAdjustment: {type: $Uint8},
    data: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
});
