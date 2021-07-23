import { $Uint32 } from "kryo/integer";
import { WhiteListType } from "kryo/white-list";

export type SoundSize = 8 | 16;

export const $SoundSize: WhiteListType<SoundSize> = new WhiteListType<SoundSize>({
  itemType: $Uint32,
  values: [8, 16],
});
