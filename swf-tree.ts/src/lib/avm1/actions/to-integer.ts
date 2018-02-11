import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface ToInteger extends ActionBase {
  action: ActionType.ToInteger;
}

export const $ToInteger: DocumentIoType<ToInteger> = new DocumentType<ToInteger>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.ToInteger as ActionType.ToInteger})},
  },
  changeCase: CaseStyle.SnakeCase,
});
