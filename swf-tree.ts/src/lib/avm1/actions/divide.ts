import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface Divide extends ActionBase {
  action: ActionType.Divide;
}

export const $Divide: DocumentIoType<Divide> = new DocumentType<Divide>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Divide as ActionType.Divide})},
  },
  changeCase: CaseStyle.SnakeCase,
});
