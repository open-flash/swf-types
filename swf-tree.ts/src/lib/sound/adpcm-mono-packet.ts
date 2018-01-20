import { CaseStyle, DocumentType, IntegerType } from "kryo";
import { Sint16, Uint32 } from "semantic-types";

export interface AdpcmMonoPacket {
  initialSample: Sint16;
  initialIndex: Uint32;
  adpcmCodeData: Buffer;
}

export namespace AdpcmMonoPacket {
  export interface Json {
    sample_count: number;
    mp3_sound_data: any;
  }

  export const type: DocumentType<AdpcmMonoPacket> = new DocumentType<AdpcmMonoPacket>({
    properties: {
      sampleCount: {type: new IntegerType()},
      mp3SoundData: {type: null as any},
    },
    rename: CaseStyle.SnakeCase,
  });
}
