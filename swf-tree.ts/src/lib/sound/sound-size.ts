import { $Uint32 } from "kryo/builtins/uint32";
import { WhiteListType } from "kryo/types/white-list";

export type SoundSize = 8 | 16;

export const $SoundSize: WhiteListType<SoundSize> = new WhiteListType<SoundSize>({
  itemType: $Uint32,
  values: [8, 16],
});
