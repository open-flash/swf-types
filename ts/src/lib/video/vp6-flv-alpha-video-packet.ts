import { CaseStyle } from "kryo";
import { $Bytes } from "kryo/bytes";
import { $Uint8 } from "kryo/integer";
import { RecordIoType, RecordType } from "kryo/record";
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
