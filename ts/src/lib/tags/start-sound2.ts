import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Ucs2StringType } from "kryo/ucs2-string";

import { $SoundInfo, SoundInfo } from "../sound/sound-info.js";
import { _Tag } from "./_tag.js";
import { $TagType, TagType } from "./_type.js";

export interface StartSound2 extends _Tag {
  type: TagType.StartSound2;
  soundClassName: string;
  soundInfo: SoundInfo;
}

export const $StartSound2: RecordIoType<StartSound2> = new RecordType<StartSound2>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.StartSound2 as TagType.StartSound2})},
    soundClassName: {type: new Ucs2StringType({maxLength: Infinity})},
    soundInfo: {type: $SoundInfo},
  },
  changeCase: CaseStyle.SnakeCase,
});
