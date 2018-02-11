import { CaseStyle } from "kryo/case-style";
import { BufferType } from "kryo/types/buffer";
import { DocumentIoType, DocumentType } from "kryo/types/document";

export interface Vp6SwfVideoPacket {
  data: Uint8Array;
}

export const $Vp6SwfVideoPacket: DocumentIoType<Vp6SwfVideoPacket> = new DocumentType<Vp6SwfVideoPacket>({
  properties: {
    data: {type: new BufferType({maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
