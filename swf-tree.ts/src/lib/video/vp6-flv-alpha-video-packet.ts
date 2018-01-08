import { BufferType, CaseStyle, DocumentType, IntegerType } from "kryo";
import { Uint8 } from "semantic-types";

export interface Vp6FlvAlphaVideoPacket {
  horizontalAdjustment: Uint8;
  verticalAdjustment: Uint8;
  data: Uint8Array;
  alphaData: Uint8Array;
}

export namespace Vp6FlvAlphaVideoPacket {
  export interface Json {
    horizontal_adjustment: number;
    vertical_adjustment: number;
    data: string;
    alpha_data: string;
  }

  export const type: DocumentType<Vp6FlvAlphaVideoPacket> = new DocumentType<Vp6FlvAlphaVideoPacket>({
    properties: {
      horizontalAdjustment: {type: new IntegerType()},
      verticalAdjustment: {type: new IntegerType()},
      data: {type: new BufferType({maxLength: Infinity})},
      alphaData: {type: new BufferType({maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
