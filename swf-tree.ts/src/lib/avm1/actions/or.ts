import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface Or extends ActionBase {
  action: ActionType.Or;
}

export const $Or: DocumentIoType<Or> = new DocumentType<Or>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Or as ActionType.Or})},
  },
  changeCase: CaseStyle.SnakeCase,
});
