import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/array";
import { $Sint16 } from "kryo/integer";
import { RecordIoType, RecordType } from "kryo/record";
import { Sint16 } from "semantic-types";

import { $Mp3Frame, Mp3Frame } from "./mp3-frame.mjs";

export interface Mp3SoundData {
  seekSamples: Sint16;
  mp3Frames: Mp3Frame[];
}

export const $Mp3SoundData: RecordIoType<Mp3SoundData> = new RecordType<Mp3SoundData>({
  properties: {
    seekSamples: {type: $Sint16},
    mp3Frames: {
      type: new ArrayType({itemType: $Mp3Frame, maxLength: Infinity}),
    },
  },
  changeCase: CaseStyle.SnakeCase,
});
