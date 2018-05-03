import { $Bytes } from "kryo/builtins/bytes";
import { $Uint16 } from "kryo/builtins/uint16";
import { $Uint32 } from "kryo/builtins/uint32";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Uint16, Uint32 } from "semantic-types";
import { $AudioCodingFormat, AudioCodingFormat } from "../sound/audio-coding-format";
import { $SoundRate, SoundRate } from "../sound/sound-rate";
import { $SoundSize, SoundSize } from "../sound/sound-size";
import { $SoundType, SoundType } from "../sound/sound-type";
import { _Tag } from "../tags/_tag";
import { $TagType, TagType } from "../tags/_type";

export interface DefineSound extends _Tag {
  type: TagType.DefineSound;
  id: Uint16;
  format: AudioCodingFormat;
  soundRate: SoundRate;
  soundSize: SoundSize;
  soundType: SoundType;
  sampleCount: Uint32;
  data: Uint8Array;
}

export const $DefineSound: DocumentIoType<DefineSound> = new DocumentType<DefineSound>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DefineSound as TagType.DefineSound})},
    id: {type: $Uint16},
    format: {type: $AudioCodingFormat},
    soundRate: {type: $SoundRate},
    soundSize: {type: $SoundSize},
    soundType: {type: $SoundType},
    sampleCount: {type: $Uint32},
    data: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
});
