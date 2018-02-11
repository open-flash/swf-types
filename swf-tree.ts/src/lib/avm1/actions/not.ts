import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface Not extends ActionBase {
  action: ActionType.Not;
}

export const $Not: DocumentIoType<Not> = new DocumentType<Not>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Not as ActionType.Not})},
  },
  changeCase: CaseStyle.SnakeCase,
});
