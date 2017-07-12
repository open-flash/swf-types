import {CaseStyle, DocumentType, Int32Type, LiteralType, Ucs2StringType} from "kryo";
import {Uint16, Uint32} from "semantic-types";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";
import {AudioCodingFormat} from "./audio-coding-format";
import {SoundRate} from "./sound-rate";
import {SoundSize} from "./sound-size";
import {SoundType} from "./sound-type";

export interface DefineSound extends SwfTagBase {
  type: SwfTagType.DefineSound;
  soundId: Uint16;
  soundFormat: AudioCodingFormat;
  soundRate: SoundRate;
  soundSize: SoundSize;
  soundType: SoundType;
  soundSampleCount: Uint32;
  soundData: Buffer;
}

export namespace DefineSound {
  export interface Json {
    type: "define-sound";
    sound_id: number;
    sound_format: AudioCodingFormat.Json;
    sound_rate: SoundRate.Json;
    sound_size: SoundSize.Json;
    sound_type: SoundType.Json;
    sound_sample_count: number;
    soundData: string;
  }

  export const type: DocumentType<DefineSound> = new DocumentType<DefineSound>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.DefineSound})},
      soundId: {type: new Int32Type()},
      soundFormat: {type: AudioCodingFormat.type},
      soundRate: {type: SoundRate.type},
      soundSize: {type: SoundSize.type},
      soundType: {type: SoundType.type},
      soundSampleCount: {type: new Int32Type()},
      soundData: {type: new Ucs2StringType({maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
