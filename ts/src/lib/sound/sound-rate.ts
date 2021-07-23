import { $Uint32 } from "kryo/integer";
import { WhiteListType } from "kryo/white-list";

export type SoundRate = 5500 | 11000 | 22000 | 44000;

export const $SoundRate: WhiteListType<SoundRate> = new WhiteListType<SoundRate>({
  itemType: $Uint32,
  values: [5500, 11000, 22000, 44000],
});
