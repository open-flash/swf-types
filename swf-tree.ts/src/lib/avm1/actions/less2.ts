import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface Less2 extends ActionBase {
  action: ActionType.Less2;
}

export const $Less2: DocumentIoType<Less2> = new DocumentType<Less2>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Less2 as ActionType.Less2})},
  },
  changeCase: CaseStyle.SnakeCase,
});
