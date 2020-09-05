import { $Bytes } from "kryo/lib/bytes.js";
import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
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
