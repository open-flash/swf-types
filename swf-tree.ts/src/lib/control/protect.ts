import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { _Tag } from "../tags/_tag";
import { $TagType, TagType } from "../tags/_type";

export interface Protect extends _Tag {
  type: TagType.Protect;
}

export const $Protect: DocumentIoType<Protect> = new DocumentType<Protect>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.Protect as TagType.Protect})},
  },
  changeCase: CaseStyle.SnakeCase,
});
