import { $Bytes } from "kryo/builtins/bytes";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";

export interface Vp6SwfAlphaVideoPacket {
  data: Uint8Array;
  alphaData: Uint8Array;
}

// tslint:disable-next-line:max-line-length
export const $Vp6SwfAlphaVideoPacket: DocumentIoType<Vp6SwfAlphaVideoPacket> = new DocumentType<Vp6SwfAlphaVideoPacket>({
  properties: {
    data: {type: $Bytes},
    alphaData: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
});
