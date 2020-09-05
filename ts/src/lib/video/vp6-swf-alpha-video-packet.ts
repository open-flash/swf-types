import { CaseStyle } from "kryo";
import { $Bytes } from "kryo/lib/bytes.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";

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
