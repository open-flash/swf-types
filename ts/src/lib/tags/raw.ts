import { $Bytes } from "kryo/builtins/bytes";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface Raw extends _Tag {
  readonly type: TagType.Raw;
  readonly data: Uint8Array;
}

export const $Raw: DocumentIoType<Raw> = new DocumentType<Raw>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.Raw as TagType.Raw})},
    data: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
});
