import {BufferType, CaseStyle, DocumentType, Int32Type} from "kryo";
import {Uint8} from "semantic-types";

export interface Vp6FlvAlphaVideoPacket {
  horizontalAdjustment: Uint8;
  verticalAdjustment: Uint8;
  data: Uint8Array;
  alphaData: Uint8Array;
}

export namespace Vp6FlvAlphaVideoPacket {
  export interface Json {
    "horizontal-adjustment": number;
    "vertical-adjustment": number;
    "data": string;
    "alpha-data": string;
  }

  export const type: DocumentType<Vp6FlvAlphaVideoPacket> = new DocumentType<Vp6FlvAlphaVideoPacket>({
    properties: {
      horizontalAdjustment: {type: new Int32Type()},
      verticalAdjustment: {type: new Int32Type()},
      data: {type: new BufferType({maxLength: Infinity})},
      alphaData: {type: new BufferType({maxLength: Infinity})},
    },
    rename: CaseStyle.KebabCase,
  });
}
