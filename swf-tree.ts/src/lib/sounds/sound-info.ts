import { ArrayType, BooleanType, CaseStyle, DocumentType, IntegerType } from "kryo";
import { Uint32 } from "semantic-types";
import { SoundEnvelope } from "./sound-envelope";

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
    sync_stop: boolean;
    sync_no_multiple: boolean;
    in_point?: number;
    out_point?: number;
    envelope_records?: SoundEnvelope.Json[];
  }

  export const type: DocumentType<SoundInfo> = new DocumentType<SoundInfo>({
    properties: {
      syncStop: {type: new BooleanType()},
      syncNoMultiple: {type: new BooleanType()},
      inPoint: {type: new IntegerType(), optional: true},
      outPoint: {type: new IntegerType(), optional: true},
      envelopeRecords: {type: new ArrayType({itemType: SoundEnvelope.type, maxLength: Infinity}), optional: true},
    },
    rename: CaseStyle.SnakeCase,
  });
}
