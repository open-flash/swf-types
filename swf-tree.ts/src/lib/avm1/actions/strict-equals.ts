import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface StrictEquals extends ActionBase {
  action: ActionType.StrictEquals;
}

export const $StrictEquals: DocumentIoType<StrictEquals> = new DocumentType<StrictEquals>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.StrictEquals as ActionType.StrictEquals})},
  },
  changeCase: CaseStyle.SnakeCase,
});
