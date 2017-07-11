import {ArrayType, BooleanType, CaseStyle, DocumentType, Int32Type} from "kryo";
import {Uint32} from "semantic-types";
import {SoundEnvelope} from "./sound-envelope";

export interface SoundInfo {
  syncStop: boolean;
  syncNoMultiple: boolean;
  inPoint?: Uint32;
  outPoint?: Uint32;
  envelopeRecords?: SoundEnvelope[];
}

export namespace SoundInfo {
  export interface Json {
    type: "sound-info";
    "sync-stop": boolean;
    "sync-no-multiple": boolean;
    "in-point"?: number;
    "out-point"?: number;
    "envelope-records"?: SoundEnvelope.Json[];
  }

  export const type: DocumentType<SoundInfo> = new DocumentType<SoundInfo>({
    properties: {
      syncStop: {type: new BooleanType()},
      syncNoMultiple: {type: new BooleanType()},
      inPoint: {type: new Int32Type(), optional: true},
      outPoint: {type: new Int32Type(), optional: true},
      envelopeRecords: {type: new ArrayType({itemType: SoundEnvelope.type, maxLength: Infinity}), optional: true},
    },
    rename: CaseStyle.KebabCase,
  });
}
