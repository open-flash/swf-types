import { $Bytes } from "kryo/builtins/bytes";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface SoundStreamBlock extends _Tag {
  readonly type: TagType.SoundStreamBlock;
  readonly data: Uint8Array;
}

export const $SoundStreamBlock: DocumentIoType<SoundStreamBlock> = new DocumentType<SoundStreamBlock>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.SoundStreamBlock as TagType.SoundStreamBlock})},
    data: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
});
