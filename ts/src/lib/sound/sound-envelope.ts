import { $Uint16 } from "kryo/builtins/uint16";
import { $Uint32 } from "kryo/builtins/uint32";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Uint16, Uint32 } from "semantic-types";

export interface SoundEnvelope {
  pos44: Uint32;
  leftLevel: Uint16;
  rightLevel: Uint16;
}

export const $SoundEnvelope: DocumentIoType<SoundEnvelope> = new DocumentType<SoundEnvelope>({
  properties: {
    pos44: {type: $Uint32},
    leftLevel: {type: $Uint16},
    rightLevel: {type: $Uint16},
  },
  changeCase: CaseStyle.SnakeCase,
});
