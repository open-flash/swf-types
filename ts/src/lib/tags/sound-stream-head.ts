import { $Sint16 } from "kryo/builtins/sint16";
import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Sint16, Uint16 } from "semantic-types";
import { $AudioCodingFormat, AudioCodingFormat } from "../sound/audio-coding-format";
import { $SoundRate, SoundRate } from "../sound/sound-rate";
import { $SoundSize, SoundSize } from "../sound/sound-size";
import { $SoundType, SoundType } from "../sound/sound-type";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface SoundStreamHead extends _Tag {
  readonly type: TagType.SoundStreamHead;
  readonly playbackSoundRate: SoundRate;
  readonly playbackSoundSize: SoundSize;
  readonly playbackSoundType: SoundType;
  readonly streamSoundCompression: AudioCodingFormat;
  readonly streamSoundRate: SoundRate;
  readonly streamSoundSize: SoundSize;
  readonly streamSoundType: SoundType;
  readonly streamSoundSampleCount: Uint16;
  readonly latencySeek?: Sint16;
}

export const $SoundStreamHead: DocumentIoType<SoundStreamHead> = new DocumentType<SoundStreamHead>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.SoundStreamHead as TagType.SoundStreamHead})},
    playbackSoundRate: {type: $SoundRate},
    playbackSoundSize: {type: $SoundSize},
    playbackSoundType: {type: $SoundType},
    streamSoundCompression: {type: $AudioCodingFormat},
    streamSoundRate: {type: $SoundRate},
    streamSoundSize: {type: new LiteralType({type: $SoundSize, value: 16 as 16})},
    streamSoundType: {type: $SoundType},
    streamSoundSampleCount: {type: $Uint16},
    latencySeek: {type: $Sint16, optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
});
