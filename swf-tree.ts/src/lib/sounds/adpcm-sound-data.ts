import {CaseStyle, DocumentType, Int32Type} from "kryo";

export interface AdpcmSoundData {
  adpcmCodeSize: 2 | 3 | 4 | 5;
  adpcmPackets: any[];
}

export namespace AdpcmSoundData {
  export interface Json {
    "sample-count": number;
    "mp3-sound-data": any;
  }

  export const type: DocumentType<AdpcmSoundData> = new DocumentType<AdpcmSoundData>({
    properties: {
      sampleCount: {type: new Int32Type()},
      mp3SoundData: {type: null as any},
    },
    rename: CaseStyle.KebabCase,
  });
}
