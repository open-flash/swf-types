import { $Sint16 } from "kryo/builtins/sint16";
import { $Uint32 } from "kryo/builtins/uint32";
import { CaseStyle } from "kryo/case-style";
import { BufferType } from "kryo/types/buffer";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Sint16, Uint32 } from "semantic-types";

export interface AdpcmMonoPacket {
  initialSample: Sint16;
  initialIndex: Uint32;
  adpcmCodeData: Uint8Array;
}

export const $AdpcmMonoPacket: DocumentIoType<AdpcmMonoPacket> = new DocumentType<AdpcmMonoPacket>({
  properties: {
    initialSample: {type: $Sint16},
    initialIndex: {type: $Uint32},
    adpcmCodeData: {type: new BufferType({maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
