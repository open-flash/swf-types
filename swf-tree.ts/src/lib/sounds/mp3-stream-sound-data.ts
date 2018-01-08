import { CaseStyle, DocumentType, IntegerType } from "kryo";
import { Uint16 } from "semantic-types";

export interface Mp3StreamSoundData {
  sampleCount: Uint16;
  mp3SoundData: any;
}

export namespace Mp3StreamSoundData {
  export interface Json {
    sample_count: number;
    mp3_sound_data: any;
  }

  export const type: DocumentType<Mp3StreamSoundData> = new DocumentType<Mp3StreamSoundData>({
    properties: {
      sampleCount: {type: new IntegerType()},
      mp3SoundData: {type: null as any},
    },
    rename: CaseStyle.SnakeCase,
  });
}
