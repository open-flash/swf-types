import { $Boolean } from "kryo/builtins/boolean";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Ucs2StringType } from "kryo/types/ucs2-string";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface FrameLabel extends _Tag {
  type: TagType.FrameLabel;
  name: string;
  anchorFlag?: boolean;
}

export const $FrameLabel: DocumentIoType<FrameLabel> = new DocumentType<FrameLabel>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.FrameLabel as TagType.FrameLabel})},
    name: {type: new Ucs2StringType({maxLength: Infinity})},
    anchorFlag: {type: $Boolean, optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
});
