import { CaseStyle } from "kryo";
import { $Uint16 } from "kryo/integer";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Uint16 } from "semantic-types";

import { $SoundInfo, SoundInfo } from "../sound/sound-info.mjs";
import { _Tag } from "./_tag.mjs";
import { $TagType, TagType } from "./_type.mjs";

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
