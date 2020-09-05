import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Ucs2StringType } from "kryo/lib/ucs2-string.js";

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
