import { $Uint32 } from "kryo/builtins/uint32";
import { WhiteListType } from "kryo/types/white-list";

export type SoundRate = 5500 | 11000 | 22000 | 44000;

export const $SoundRate: WhiteListType<SoundRate> = new WhiteListType<SoundRate>({
  itemType: $Uint32,
  values: [5500, 11000, 22000, 44000],
});
