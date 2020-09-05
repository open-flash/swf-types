import { CaseStyle } from "kryo";
import { $Bytes } from "kryo/lib/bytes.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";

export interface Vp6SwfVideoPacket {
  data: Uint8Array;
}

export const $Vp6SwfVideoPacket: RecordIoType<Vp6SwfVideoPacket> = new RecordType<Vp6SwfVideoPacket>({
  properties: {
    data: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
});
