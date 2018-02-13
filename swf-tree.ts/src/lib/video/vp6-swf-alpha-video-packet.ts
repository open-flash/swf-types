import { CaseStyle } from "kryo/case-style";
import { BufferType } from "kryo/types/buffer";
import { DocumentIoType, DocumentType } from "kryo/types/document";

export interface Vp6SwfAlphaVideoPacket {
  data: Uint8Array;
  alphaData: Uint8Array;
}

// tslint:disable-next-line:max-line-length
export const $Vp6SwfAlphaVideoPacket: DocumentIoType<Vp6SwfAlphaVideoPacket> = new DocumentType<Vp6SwfAlphaVideoPacket>({
  properties: {
    data: {type: new BufferType({maxLength: Infinity})},
    alphaData: {type: new BufferType({maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
