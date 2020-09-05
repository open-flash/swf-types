import { $Uint16 } from "kryo/lib/integer.js";
import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { Uint16 } from "semantic-types";
import { $SoundInfo, SoundInfo } from "../sound/sound-info.js";
import { _Tag } from "./_tag.js";
import { $TagType, TagType } from "./_type.js";

export interface StartSound extends _Tag {
  type: TagType.StartSound;
  soundId: Uint16;
  soundInfo: SoundInfo;
}

export const $StartSound: RecordIoType<StartSound> = new RecordType<StartSound>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.StartSound as TagType.StartSound})},
    soundId: {type: $Uint16},
    soundInfo: {type: $SoundInfo},
  },
  changeCase: CaseStyle.SnakeCase,
});
