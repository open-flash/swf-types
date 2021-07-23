import { CaseStyle } from "kryo";
import { $Sint16, $Uint16 } from "kryo/integer";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Sint16, Uint16 } from "semantic-types";

import { $AudioCodingFormat, AudioCodingFormat } from "../sound/audio-coding-format.js";
import { $SoundRate, SoundRate } from "../sound/sound-rate.js";
import { $SoundSize, SoundSize } from "../sound/sound-size.js";
import { $SoundType, SoundType } from "../sound/sound-type.js";
import { _Tag } from "./_tag.js";
import { $TagType, TagType } from "./_type.js";

export interface SoundStreamHead extends _Tag {
  readonly type: TagType.SoundStreamHead;
  readonly playbackSoundType: SoundType;
  readonly playbackSoundSize: SoundSize;
  readonly playbackSoundRate: SoundRate;
  readonly streamSoundType: SoundType;
  readonly streamSoundSize: SoundSize;
  readonly streamSoundRate: SoundRate;
  readonly streamFormat: AudioCodingFormat;
  readonly streamSampleCount: Uint16;
  readonly latencySeek?: Sint16;
}

export const $SoundStreamHead: RecordIoType<SoundStreamHead> = new RecordType<SoundStreamHead>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.SoundStreamHead as TagType.SoundStreamHead})},
    playbackSoundType: {type: $SoundType},
    playbackSoundSize: {type: $SoundSize},
    playbackSoundRate: {type: $SoundRate},
    streamSoundType: {type: $SoundType},
    streamSoundSize: {type: $SoundSize},
    streamSoundRate: {type: $SoundRate},
    streamFormat: {type: $AudioCodingFormat},
    streamSampleCount: {type: $Uint16},
    latencySeek: {type: $Sint16, optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
});
