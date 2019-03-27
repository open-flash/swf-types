import { $Sint16 } from "kryo/builtins/sint16";
import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Sint16 } from "semantic-types";
import { $Mp3Frame, Mp3Frame } from "./mp3-frame";

export interface Mp3SoundData {
  seekSamples: Sint16;
  mp3Frames: Mp3Frame[];
}

export const $Mp3SoundData: DocumentIoType<Mp3SoundData> = new DocumentType<Mp3SoundData>({
  properties: {
    seekSamples: {type: $Sint16},
    mp3Frames: {
      type: new ArrayType({itemType: $Mp3Frame, maxLength: Infinity}),
    },
  },
  changeCase: CaseStyle.SnakeCase,
});
