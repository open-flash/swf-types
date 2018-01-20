import { CaseStyle, DocumentType, IntegerType } from "kryo";
import { Uint16, Uint32 } from "semantic-types";

export interface SoundEnvelope {
  pos44: Uint32;
  leftLevel: Uint16;
  rightLevel: Uint16;
}

export namespace SoundEnvelope {
  export interface Json {
    pos44: number;
    left_level: number;
    right_level: number;
  }

  export const type: DocumentType<SoundEnvelope> = new DocumentType<SoundEnvelope>({
    properties: {
      pos44: {type: new IntegerType()},
      leftLevel: {type: new IntegerType()},
      rightLevel: {type: new IntegerType()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
