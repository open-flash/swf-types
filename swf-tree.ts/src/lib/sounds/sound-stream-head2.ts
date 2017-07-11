import {CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Sint16, Uint16} from "semantic-types";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";
import {AudioCodingFormat} from "./audio-coding-format";
import {SoundRate} from "./sound-rate";
import {SoundSize} from "./sound-size";
import {SoundType} from "./sound-type";

export interface SoundStreamHead2 extends SwfTagBase {
  type: SwfTagType.SoundStreamHead2;
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

export namespace SoundStreamHead2 {
  export interface Json {
    type: "sound-stream-head2";
    "playback-sound-rate": SoundRate.Json;
    "playback-sound-size": SoundSize;
    "playback-sound-type": SoundType.Json;
    "stream-sound-compression": AudioCodingFormat.Json;
    "stream-sound-rate": SoundRate.Json;
    "stream-sound-size": SoundSize;
    "stream-sound-type": SoundType.Json;
    "stream-sound-sample-count": number;
    "latency-seek"?: number;
  }

  export const type: DocumentType<SoundStreamHead2> = new DocumentType<SoundStreamHead2>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.SoundStreamHead2})},
      playbackSoundRate: {type: SoundRate.type},
      playbackSoundSize: {type: SoundSize.type},
      playbackSoundType: {type: SoundType.type},
      streamSoundCompression: {type: AudioCodingFormat.type},
      streamSoundRate: {type: SoundRate.type},
      streamSoundSize: {type: new LiteralType({type: SoundSize.type, value: 16})},
      streamSoundType: {type: SoundType.type},
      streamSoundSampleCount: {type: new Int32Type()},
      latencySeek: {type: new Int32Type(), optional: true},
    },
    rename: CaseStyle.KebabCase,
  });
}
