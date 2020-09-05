import { CaseStyle } from "kryo";
import { $Uint16 } from "kryo/lib/integer.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Uint16 } from "semantic-types";

import { $SoundInfo, SoundInfo } from "../sound/sound-info.js";

export interface ButtonSound {
  soundId: Uint16;
  soundInfo: SoundInfo;
}

export const $ButtonSound: RecordIoType<ButtonSound> = new RecordType<ButtonSound>({
  properties: {
    soundId: {type: $Uint16},
    soundInfo: {type: $SoundInfo},
  },
  changeCase: CaseStyle.SnakeCase,
});
