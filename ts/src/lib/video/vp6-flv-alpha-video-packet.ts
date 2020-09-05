import { $Bytes } from "kryo/lib/bytes.js";
import { $Uint8 } from "kryo/lib/integer.js";
import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Uint8 } from "semantic-types";

export interface Vp6FlvAlphaVideoPacket {
  horizontalAdjustment: Uint8;
  verticalAdjustment: Uint8;
  data: Uint8Array;
  alphaData: Uint8Array;
}

// tslint:disable-next-line:max-line-length
export const $Vp6FlvAlphaVideoPacket: RecordIoType<Vp6FlvAlphaVideoPacket> = new RecordType<Vp6FlvAlphaVideoPacket>({
  properties: {
    horizontalAdjustment: {type: $Uint8},
    verticalAdjustment: {type: $Uint8},
    data: {type: $Bytes},
    alphaData: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
});
