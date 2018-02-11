import { $Boolean } from "kryo/builtins/boolean";
import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { IntegerType } from "kryo/types/integer";
import { Uint32 } from "semantic-types";
import { $SoundEnvelope, SoundEnvelope } from "./sound-envelope";

export interface SoundInfo {
  syncStop: boolean;
  syncNoMultiple: boolean;
  inPoint?: Uint32;
  outPoint?: Uint32;
  envelopeRecords?: SoundEnvelope[];
}

export const $SoundInfo: DocumentIoType<SoundInfo> = new DocumentType<SoundInfo>({
  properties: {
    syncStop: {type: $Boolean},
    syncNoMultiple: {type: $Boolean},
    inPoint: {type: new IntegerType(), optional: true},
    outPoint: {type: new IntegerType(), optional: true},
    envelopeRecords: {type: new ArrayType({itemType: $SoundEnvelope, maxLength: Infinity}), optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
});
