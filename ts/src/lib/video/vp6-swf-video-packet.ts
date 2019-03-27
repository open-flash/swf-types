import { $Bytes } from "kryo/builtins/bytes";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";

export interface Vp6SwfVideoPacket {
  data: Uint8Array;
}

export const $Vp6SwfVideoPacket: DocumentIoType<Vp6SwfVideoPacket> = new DocumentType<Vp6SwfVideoPacket>({
  properties: {
    data: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
});
