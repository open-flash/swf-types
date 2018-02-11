import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface StringEquals extends ActionBase {
  action: ActionType.StringEquals;
}

export const $StringEquals: DocumentIoType<StringEquals> = new DocumentType<StringEquals>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.StringEquals as ActionType.StringEquals})},
  },
  changeCase: CaseStyle.SnakeCase,
});
