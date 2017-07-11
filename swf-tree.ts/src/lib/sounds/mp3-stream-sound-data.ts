import {CaseStyle, DocumentType, Int32Type} from "kryo";
import {Uint16} from "semantic-types";

export interface Mp3StreamSoundData {
  sampleCount: Uint16;
  mp3SoundData: any;
}

export namespace Mp3StreamSoundData {
  export interface Json {
    "sample-count": number;
    "mp3-sound-data": any;
  }

  export const type: DocumentType<Mp3StreamSoundData> = new DocumentType<Mp3StreamSoundData>({
    properties: {
      sampleCount: {type: new Int32Type()},
      mp3SoundData: {type: null as any},
    },
    rename: CaseStyle.KebabCase,
  });
}
