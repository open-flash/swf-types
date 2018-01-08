import { BufferType, CaseStyle, DocumentType } from "kryo";

export interface Vp6SwfVideoPacket {
  data: Uint8Array;
}

export namespace Vp6SwfVideoPacket {
  export interface Json {
    data: string;
  }

  export const type: DocumentType<Vp6SwfVideoPacket> = new DocumentType<Vp6SwfVideoPacket>({
    properties: {
      data: {type: new BufferType({maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
