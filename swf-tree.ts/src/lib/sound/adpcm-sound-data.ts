import { CaseStyle, DocumentType, IntegerType } from "kryo";

export interface AdpcmSoundData {
  adpcmCodeSize: 2 | 3 | 4 | 5;
  adpcmPackets: any[];
}

export namespace AdpcmSoundData {
  export interface Json {
    sample_count: number;
    mp3_sound_data: any;
  }

  export const type: DocumentType<AdpcmSoundData> = new DocumentType<AdpcmSoundData>({
    properties: {
      sampleCount: {type: new IntegerType()},
      mp3SoundData: {type: null as any},
    },
    rename: CaseStyle.SnakeCase,
  });
}
