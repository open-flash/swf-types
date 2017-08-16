import {BufferType, CaseStyle, DocumentType, IntegerType} from "kryo";
import {Uint8} from "semantic-types";

export interface Vp6FlvVideoPacket {
  horizontalAdjustment: Uint8;
  verticalAdjustment: Uint8;
  data: Uint8Array;
}

export namespace Vp6FlvVideoPacket {
  export interface Json {
    horizontal_adjustment: number;
    vertical_adjustment: number;
    data: string;
  }

  export const type: DocumentType<Vp6FlvVideoPacket> = new DocumentType<Vp6FlvVideoPacket>({
    properties: {
      horizontalAdjustment: {type: new IntegerType()},
      verticalAdjustment: {type: new IntegerType()},
      data: {type: new BufferType({maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
