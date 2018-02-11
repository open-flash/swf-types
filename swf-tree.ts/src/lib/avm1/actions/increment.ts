import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface Increment extends ActionBase {
  action: ActionType.Increment;
}

export const $Increment: DocumentIoType<Increment> = new DocumentType<Increment>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Increment as ActionType.Increment})},
  },
  changeCase: CaseStyle.SnakeCase,
});
