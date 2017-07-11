import {CaseStyle, DocumentType, Int32Type} from "kryo";
import {Uint16, Uint32} from "semantic-types";

\
export interface SoundEnvelope {
  pos44: Uint32;
  leftLevel: Uint16;
  rightLevel: Uint16;
}

export namespace SoundEnvelope {
  export interface Json {
    pos44: number;
    "left-level": number;
    "right-level": number;
  }

  export const type: DocumentType<SoundEnvelope> = new DocumentType<SoundEnvelope>({
    properties: {
      pos44: {type: new Int32Type()},
      leftLevel: {type: new Int32Type()},
      rightLevel: {type: new Int32Type()},
    },
    rename: CaseStyle.KebabCase,
  });
}
