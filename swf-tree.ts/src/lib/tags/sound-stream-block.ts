import { $Bytes } from "kryo/builtins/bytes";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Ucs2StringType } from "kryo/types/ucs2-string";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface SoundStreamBlock extends _Tag {
  type: TagType.SoundStreamBlock;
  data: Uint8Array;
}

export const $SoundStreamBlock: DocumentIoType<SoundStreamBlock> = new DocumentType<SoundStreamBlock>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.SoundStreamBlock as TagType.SoundStreamBlock})},
    data: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
});
