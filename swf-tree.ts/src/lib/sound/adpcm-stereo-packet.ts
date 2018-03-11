import { $Bytes } from "kryo/builtins/bytes";
import { $Sint16 } from "kryo/builtins/sint16";
import { $Uint32 } from "kryo/builtins/uint32";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Sint16, Uint32 } from "semantic-types";

export interface AdpcmStereoPacket {
  initialSampleLeft: Sint16;
  initialIndexLeft: Uint32;
  initialSampleRight: Sint16;
  initialIndexRight: Uint32;
  adpcmCodeData: Uint8Array;
}

export const $AdpcmStereoPacket: DocumentIoType<AdpcmStereoPacket> = new DocumentType<AdpcmStereoPacket>({
  properties: {
    initialSampleLeft: {type: $Sint16},
    initialIndexLeft: {type: $Uint32},
    initialSampleRight: {type: $Sint16},
    initialIndexRight: {type: $Uint32},
    adpcmCodeData: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
});
