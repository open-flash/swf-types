import {BufferType, CaseStyle, DocumentType} from "kryo";

export interface Vp6SwfAlphaVideoPacket {
  data: Uint8Array;
  alphaData: Uint8Array;
}

export namespace Vp6SwfAlphaVideoPacket {
  export interface Json {
    data: string;
    alpha_data: string;
  }

  export const type: DocumentType<Vp6SwfAlphaVideoPacket> = new DocumentType<Vp6SwfAlphaVideoPacket>({
    properties: {
      data: {type: new BufferType({maxLength: Infinity})},
      alphaData: {type: new BufferType({maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
