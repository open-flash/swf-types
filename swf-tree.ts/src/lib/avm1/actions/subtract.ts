import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface Subtract extends ActionBase {
  action: ActionType.Subtract;
}

export const $Subtract: DocumentIoType<Subtract> = new DocumentType<Subtract>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Subtract as ActionType.Subtract})},
  },
  changeCase: CaseStyle.SnakeCase,
});
