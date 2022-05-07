import { CaseStyle } from "kryo";
import { $Bytes } from "kryo/bytes";
import { RecordIoType, RecordType } from "kryo/record";

export interface Vp6SwfAlphaVideoPacket {
  data: Uint8Array;
  alphaData: Uint8Array;
}

// tslint:disable-next-line:max-line-length
export const $Vp6SwfAlphaVideoPacket: RecordIoType<Vp6SwfAlphaVideoPacket> = new RecordType<Vp6SwfAlphaVideoPacket>({
  properties: {
    data: {type: $Bytes},
    alphaData: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
});
