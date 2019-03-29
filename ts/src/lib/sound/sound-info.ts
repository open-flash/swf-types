import { $Boolean } from "kryo/builtins/boolean";
import { $Uint16 } from "kryo/builtins/uint16";
import { $Uint32 } from "kryo/builtins/uint32";
import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Uint16, Uint32 } from "semantic-types";
import { $SoundEnvelope, SoundEnvelope } from "./sound-envelope";

export interface SoundInfo {
  syncStop: boolean;
  syncNoMultiple: boolean;
  inPoint?: Uint32;
  outPoint?: Uint32;
  loopCount?: Uint16;
  envelopeRecords?: SoundEnvelope[];
}

export const $SoundInfo: DocumentIoType<SoundInfo> = new DocumentType<SoundInfo>({
  properties: {
    syncStop: {type: $Boolean},
    syncNoMultiple: {type: $Boolean},
    inPoint: {type: $Uint32, optional: true},
    outPoint: {type: $Uint32, optional: true},
    loopCount: {type: $Uint16, optional: true},
    envelopeRecords: {type: new ArrayType({itemType: $SoundEnvelope, maxLength: Infinity}), optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
});
