import { $Uint8 } from "kryo/builtins/uint8";
import { CaseStyle } from "kryo/case-style";
import { BufferType } from "kryo/types/buffer";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Uint8 } from "semantic-types";

export interface Vp6FlvAlphaVideoPacket {
  horizontalAdjustment: Uint8;
  verticalAdjustment: Uint8;
  data: Uint8Array;
  alphaData: Uint8Array;
}

export const $Vp6FlvAlphaVideoPacket: DocumentIoType<Vp6FlvAlphaVideoPacket> = new DocumentType<Vp6FlvAlphaVideoPacket>({
  properties: {
    horizontalAdjustment: {type: $Uint8},
    verticalAdjustment: {type: $Uint8},
    data: {type: new BufferType({maxLength: Infinity})},
    alphaData: {type: new BufferType({maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
