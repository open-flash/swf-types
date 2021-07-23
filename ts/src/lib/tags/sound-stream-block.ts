import { CaseStyle } from "kryo";
import { $Bytes } from "kryo/bytes";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { _Tag } from "./_tag.js";
import { $TagType, TagType } from "./_type.js";

export interface SoundStreamBlock extends _Tag {
  readonly type: TagType.SoundStreamBlock;
  readonly data: Uint8Array;
}

export const $SoundStreamBlock: RecordIoType<SoundStreamBlock> = new RecordType<SoundStreamBlock>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.SoundStreamBlock as TagType.SoundStreamBlock})},
    data: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
});
