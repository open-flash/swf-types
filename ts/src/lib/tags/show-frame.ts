import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface ShowFrame extends _Tag {
  readonly type: TagType.ShowFrame;
}

export const $ShowFrame: DocumentIoType<ShowFrame> = new DocumentType<ShowFrame>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.ShowFrame as TagType.ShowFrame})},
  },
  changeCase: CaseStyle.SnakeCase,
});
