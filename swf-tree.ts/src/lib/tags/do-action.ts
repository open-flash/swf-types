import { $Bytes } from "kryo/builtins/bytes";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface DoAction extends _Tag {
  type: TagType.DoAction;
  actions: Uint8Array;
}

export const $DoAction: DocumentIoType<DoAction> = new DocumentType<DoAction>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DoAction as TagType.DoAction})},
    actions: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
});
