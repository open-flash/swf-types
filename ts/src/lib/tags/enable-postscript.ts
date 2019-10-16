import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface EnablePostscript extends _Tag {
  readonly type: TagType.EnablePostscript;
}

export const $EnablePostscript: DocumentIoType<EnablePostscript> = new DocumentType<EnablePostscript>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.EnablePostscript as TagType.EnablePostscript})},
  },
  changeCase: CaseStyle.SnakeCase,
});
