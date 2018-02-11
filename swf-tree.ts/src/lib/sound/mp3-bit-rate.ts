import { $Uint32 } from "kryo/builtins/uint32";
import { LiteralType } from "kryo/types/literal";

export type Mp3BitRate = 32000;

export const $Mp3BitRate: LiteralType<Mp3BitRate> = new LiteralType<Mp3BitRate>({type: $Uint32, value: 32000});
