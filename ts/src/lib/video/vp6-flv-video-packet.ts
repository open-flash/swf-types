import { $Bytes } from "kryo/builtins/bytes";
import { $Uint8 } from "kryo/builtins/uint8";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Uint8 } from "semantic-types";

export interface Vp6FlvVideoPacket {
  horizontalAdjustment: Uint8;
  verticalAdjustment: Uint8;
  data: Uint8Array;
}

export const $Vp6FlvVideoPacket: DocumentIoType<Vp6FlvVideoPacket> = new DocumentType<Vp6FlvVideoPacket>({
  properties: {
    horizontalAdjustment: {type: $Uint8},
    verticalAdjustment: {type: $Uint8},
    data: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
});
