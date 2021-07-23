import { CaseStyle } from "kryo";
import { $Any } from "kryo/any";
import { $Uint16 } from "kryo/integer";
import { RecordIoType, RecordType } from "kryo/record";
import { Uint16 } from "semantic-types";

export interface Mp3StreamSoundData {
  sampleCount: Uint16;
  mp3SoundData: any;
}

export const $Mp3StreamSoundData: RecordIoType<Mp3StreamSoundData> = new RecordType<Mp3StreamSoundData>({
  properties: {
    sampleCount: {type: $Uint16},
    mp3SoundData: {type: $Any},
  },
  changeCase: CaseStyle.SnakeCase,
});
