import { CaseStyle, DocumentType, IntegerType, LiteralType } from "kryo";
import { Sint16, Uint16 } from "semantic-types";
import { AudioCodingFormat } from "../sound/audio-coding-format";
import { SoundRate } from "../sound/sound-rate";
import { SoundSize } from "../sound/sound-size";
import { SoundType } from "../sound/sound-type";
import { _Tag } from "./_tag";
import { TagType } from "./_type";

export interface SoundStreamHead extends _Tag {
  type: TagType.SoundStreamHead;
  playbackSoundRate: SoundRate;
  playbackSoundSize: SoundSize;
  playbackSoundType: SoundType;
  streamSoundCompression: AudioCodingFormat;
  streamSoundRate: SoundRate;
  streamSoundSize: SoundSize;
  streamSoundType: SoundType;
  streamSoundSampleCount: Uint16;
  latencySeek?: Sint16;
}

export namespace SoundStreamHead {
  export interface Json {
    type: "sound-stream-head";
    playback_sound_rate: SoundRate.Json;
    playback_sound_size: SoundSize;
    playback_sound_type: SoundType.Json;
    stream_sound_compression: AudioCodingFormat.Json;
    stream_sound_rate: SoundRate.Json;
    stream_sound_size: SoundSize;
    stream_sound_type: SoundType.Json;
    stream_sound_sample_count: number;
    latency_seek?: number;
  }

  export const type: DocumentType<SoundStreamHead> = new DocumentType<SoundStreamHead>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.SoundStreamHead})},
      playbackSoundRate: {type: SoundRate.type},
      playbackSoundSize: {type: SoundSize.type},
      playbackSoundType: {type: SoundType.type},
      streamSoundCompression: {type: AudioCodingFormat.type},
      streamSoundRate: {type: SoundRate.type},
      streamSoundSize: {type: new LiteralType({type: SoundSize.type, value: 16})},
      streamSoundType: {type: SoundType.type},
      streamSoundSampleCount: {type: new IntegerType()},
      latencySeek: {type: new IntegerType(), optional: true},
    },
    rename: CaseStyle.SnakeCase,
  });
}
