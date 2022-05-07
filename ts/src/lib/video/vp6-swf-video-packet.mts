import { CaseStyle } from "kryo";
import { $Bytes } from "kryo/bytes";
import { RecordIoType, RecordType } from "kryo/record";

export interface Vp6SwfVideoPacket {
  data: Uint8Array;
}

export const $Vp6SwfVideoPacket: RecordIoType<Vp6SwfVideoPacket> = new RecordType<Vp6SwfVideoPacket>({
  properties: {
    data: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
});
