import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $SRgb8, SRgb8 } from "../s-rgb8";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface SetBackgroundColor extends _Tag {
  readonly type: TagType.SetBackgroundColor;
  readonly color: SRgb8;
}

export const $SetBackgroundColor: DocumentIoType<SetBackgroundColor> = new DocumentType<SetBackgroundColor>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.SetBackgroundColor as TagType.SetBackgroundColor})},
    color: {type: $SRgb8},
  },
  changeCase: CaseStyle.SnakeCase,
});
