import { $Uint32 } from "kryo/lib/integer.js";
import { WhiteListType } from "kryo/lib/white-list.js";

export type SoundSize = 8 | 16;

export const $SoundSize: WhiteListType<SoundSize> = new WhiteListType<SoundSize>({
  itemType: $Uint32,
  values: [8, 16],
});
