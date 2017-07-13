import {CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Sint16, Uint16} from "semantic-types";
import {_Tag} from "../tags/_tag";
import {TagType} from "../tags/_type";
import {SoundRate} from "./sound-rate";
import {SoundSize} from "./sound-size";
import {SoundType} from "./sound-type";
import {StreamSoundCompression} from "./stream-sound-compression";

export interface SoundStreamHead extends _Tag {
  type: TagType.SoundStreamHead;
  playbackSoundRate: SoundRate;
  playbackSoundSize: 16;
  playbackSoundType: SoundType;
  streamSoundCompression: StreamSoundCompression;
  streamSoundRate: SoundRate;
  streamSoundSize: 16;
  streamSoundType: SoundType;
  streamSoundSampleCount: Uint16;
  latencySeek?: Sint16;
}

export namespace SoundStreamHead {
  export interface Json {
    type: "sound-stream-head";
    playback_sound_rate: SoundRate.Json;
    playback_sound_size: 16;
    playback_sound_type: SoundType.Json;
    stream_sound_compression: StreamSoundCompression.Json;
    stream_sound_rate: SoundRate.Json;
    stream_sound_size: 16;
    stream_sound_type: SoundType.Json;
    stream_sound_sample_count: number;
    latency_seek?: number;
  }

  export const type: DocumentType<SoundStreamHead> = new DocumentType<SoundStreamHead>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.SoundStreamHead})},
      playbackSoundRate: {type: SoundRate.type},
      playbackSoundSize: {type: new LiteralType({type: SoundSize.type, value: 16})},
      playbackSoundType: {type: SoundType.type},
      streamSoundCompression: {type: StreamSoundCompression.type},
      streamSoundRate: {type: SoundRate.type},
      streamSoundSize: {type: new LiteralType({type: SoundSize.type, value: 16})},
      streamSoundType: {type: SoundType.type},
      streamSoundSampleCount: {type: new Int32Type()},
      latencySeek: {type: new Int32Type(), optional: true},
    },
    rename: CaseStyle.SnakeCase,
  });
}
