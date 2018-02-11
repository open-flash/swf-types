import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import * as avm1 from "../avm1/index";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface DoAction extends _Tag {
  type: TagType.DoAction;
  actions: avm1.Action[];
}

export const $DoAction: DocumentIoType<DoAction> = new DocumentType<DoAction>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DoAction as TagType.DoAction})},
    actions: {type: new ArrayType({itemType: avm1.$Action, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
