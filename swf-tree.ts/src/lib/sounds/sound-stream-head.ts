import {CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Sint16, Uint16} from "semantic-types";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";
import {SoundRate} from "./sound-rate";
import {SoundSize} from "./sound-size";
import {SoundType} from "./sound-type";
import {StreamSoundCompression} from "./stream-sound-compression";

export interface SoundStreamHead extends SwfTagBase {
  type: SwfTagType.SoundStreamHead;
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
    "playback-sound-rate": SoundRate.Json;
    "playback-sound-size": 16;
    "playback-sound-type": SoundType.Json;
    "stream-sound-compression": StreamSoundCompression.Json;
    "stream-sound-rate": SoundRate.Json;
    "stream-sound-size": 16;
    "stream-sound-type": SoundType.Json;
    "stream-sound-sample-count": number;
    "latency-seek"?: number;
  }

  export const type: DocumentType<SoundStreamHead> = new DocumentType<SoundStreamHead>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.SoundStreamHead})},
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
    rename: CaseStyle.KebabCase,
  });
}
