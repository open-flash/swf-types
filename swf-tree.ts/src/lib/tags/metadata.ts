import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Ucs2StringType } from "kryo/types/ucs2-string";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface Metadata extends _Tag {
  readonly type: TagType.Metadata;
  readonly metadata: string;
}

export const $Metadata: DocumentIoType<Metadata> = new DocumentType<Metadata>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.Metadata as TagType.Metadata})},
    metadata: {type: new Ucs2StringType({maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
