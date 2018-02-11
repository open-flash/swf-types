import { $Any } from "kryo/builtins/any";
import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Uint16 } from "semantic-types";

export interface Mp3StreamSoundData {
  sampleCount: Uint16;
  mp3SoundData: any;
}

export const $Mp3StreamSoundData: DocumentIoType<Mp3StreamSoundData> = new DocumentType<Mp3StreamSoundData>({
  properties: {
    sampleCount: {type: $Uint16},
    mp3SoundData: {type: $Any},
  },
  changeCase: CaseStyle.SnakeCase,
});
