import { $Uint16 } from "kryo/builtins/uint16";
import { $Uint32 } from "kryo/builtins/uint32";
import { CaseStyle } from "kryo/case-style";
import { BufferType } from "kryo/types/buffer";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Uint16, Uint32 } from "semantic-types";
import { _Tag } from "../tags/_tag";
import { $TagType, TagType } from "../tags/_type";
import { $AudioCodingFormat, AudioCodingFormat } from "./audio-coding-format";
import { $SoundRate, SoundRate } from "./sound-rate";
import { $SoundSize, SoundSize } from "./sound-size";
import { $SoundType, SoundType } from "./sound-type";

export interface DefineSound extends _Tag {
  type: TagType.DefineSound;
  soundId: Uint16;
  soundFormat: AudioCodingFormat;
  soundRate: SoundRate;
  soundSize: SoundSize;
  soundType: SoundType;
  soundSampleCount: Uint32;
  soundData: Uint8Array;
}

export const $DefineSound: DocumentIoType<DefineSound> = new DocumentType<DefineSound>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DefineSound as TagType.DefineSound})},
    soundId: {type: $Uint16},
    soundFormat: {type: $AudioCodingFormat},
    soundRate: {type: $SoundRate},
    soundSize: {type: $SoundSize},
    soundType: {type: $SoundType},
    soundSampleCount: {type: $Uint32},
    soundData: {type: new BufferType({maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
