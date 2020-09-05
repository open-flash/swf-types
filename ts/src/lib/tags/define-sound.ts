import { CaseStyle } from "kryo";
import { $Bytes } from "kryo/lib/bytes.js";
import { $Uint16, $Uint32 } from "kryo/lib/integer.js";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Uint16, Uint32 } from "semantic-types";

import { $AudioCodingFormat, AudioCodingFormat } from "../sound/audio-coding-format.js";
import { $SoundRate, SoundRate } from "../sound/sound-rate.js";
import { $SoundSize, SoundSize } from "../sound/sound-size.js";
import { $SoundType, SoundType } from "../sound/sound-type.js";
import { _Tag } from "./_tag.js";
import { $TagType, TagType } from "./_type.js";

export interface DefineSound extends _Tag {
  readonly type: TagType.DefineSound;
  readonly id: Uint16;
  readonly soundType: SoundType;
  readonly soundSize: SoundSize;
  readonly soundRate: SoundRate;
  readonly format: AudioCodingFormat;
  readonly sampleCount: Uint32;
  readonly data: Uint8Array;
}

export const $DefineSound: RecordIoType<DefineSound> = new RecordType<DefineSound>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DefineSound as TagType.DefineSound})},
    id: {type: $Uint16},
    soundType: {type: $SoundType},
    soundSize: {type: $SoundSize},
    soundRate: {type: $SoundRate},
    format: {type: $AudioCodingFormat},
    sampleCount: {type: $Uint32},
    data: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
});
