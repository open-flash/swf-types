import {CaseStyle, DocumentType, IntegerType, LiteralType, Ucs2StringType} from "kryo";
import {Uint16, Uint32} from "semantic-types";
import {_Tag} from "../tags/_tag";
import {TagType} from "../tags/_type";
import {AudioCodingFormat} from "./audio-coding-format";
import {SoundRate} from "./sound-rate";
import {SoundSize} from "./sound-size";
import {SoundType} from "./sound-type";

export interface DefineSound extends _Tag {
  type: TagType.DefineSound;
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
      type: {type: new LiteralType({type: TagType.type, value: TagType.DefineSound})},
      soundId: {type: new IntegerType()},
      soundFormat: {type: AudioCodingFormat.type},
      soundRate: {type: SoundRate.type},
      soundSize: {type: SoundSize.type},
      soundType: {type: SoundType.type},
      soundSampleCount: {type: new IntegerType()},
      soundData: {type: new Ucs2StringType({maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
