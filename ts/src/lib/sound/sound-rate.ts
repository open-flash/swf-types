import { $Uint32 } from "kryo/lib/integer.js";
import { WhiteListType } from "kryo/lib/white-list.js";

export type SoundRate = 5500 | 11000 | 22000 | 44000;

export const $SoundRate: WhiteListType<SoundRate> = new WhiteListType<SoundRate>({
  itemType: $Uint32,
  values: [5500, 11000, 22000, 44000],
});
