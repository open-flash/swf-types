import { $Uint32 } from "kryo/integer";
import { WhiteListType } from "kryo/white-list";

/**
 * Size of the "em square" used to define the glyphs.
 * `DefineFont2` uses a 1024 by 1024 square while `DefineFont3` uses a 20480 by 20480 square.
 */
export type EmSquareSize = 1024 | 20480;

export const $EmSquareSize: WhiteListType<EmSquareSize> = new WhiteListType<EmSquareSize>({
  itemType: $Uint32,
  values: [1024, 20480],
});
