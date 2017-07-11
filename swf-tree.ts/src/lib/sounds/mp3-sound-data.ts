import {CaseStyle, DocumentType, Int32Type} from "kryo";
import {Sint16} from "semantic-types";
import {Mp3Frame} from "./mp3-frame";

export interface Mp3SoundData {
  seekSamples: Sint16;
  mp3Frames: Mp3Frame[];
}

export namespace Mp3SoundData {
  export interface Json {
    "seek-samples": number;
    "mp3-frames": Mp3Frame.Json[];
  }

  export const type: DocumentType<Mp3SoundData> = new DocumentType<Mp3SoundData>({
    properties: {
      seekSamples: {type: new Int32Type()},
      mp3Frames: {type: Mp3Frame.type},
    },
    rename: CaseStyle.KebabCase,
  });
}
