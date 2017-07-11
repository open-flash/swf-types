import {BufferType, CaseStyle, DocumentType, Int32Type} from "kryo";
import {Uint8} from "semantic-types";

export interface Vp6FlvVideoPacket {
  horizontalAdjustment: Uint8;
  verticalAdjustment: Uint8;
  data: Uint8Array;
}

export namespace Vp6FlvVideoPacket {
  export interface Json {
    "horizontal-adjustment": number;
    "vertical-adjustment": number;
    "data": string;
  }

  export const type: DocumentType<Vp6FlvVideoPacket> = new DocumentType<Vp6FlvVideoPacket>({
    properties: {
      horizontalAdjustment: {type: new Int32Type()},
      verticalAdjustment: {type: new Int32Type()},
      data: {type: new BufferType({maxLength: Infinity})},
    },
    rename: CaseStyle.KebabCase,
  });
}
