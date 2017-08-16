import {CaseStyle, DocumentType, IntegerType} from "kryo";
import {Sint16, Uint32} from "semantic-types";

export interface AdpcmStereoPacket {
  initialSampleLeft: Sint16;
  initialIndexLeft: Uint32;
  initialSampleRight: Sint16;
  initialIndexRight: Uint32;
  adpcmCodeData: Buffer;
}

export namespace AdpcmStereoPacket {
  export interface Json {
    sample_count: number;
    mp3_sound_data: any;
  }

  export const type: DocumentType<AdpcmStereoPacket> = new DocumentType<AdpcmStereoPacket>({
    properties: {
      sampleCount: {type: new IntegerType()},
      mp3SoundData: {type: null as any},
    },
    rename: CaseStyle.SnakeCase,
  });
}
