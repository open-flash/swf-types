import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface Enumerate extends ActionBase {
  action: ActionType.Enumerate;
}

export const $Enumerate: DocumentIoType<Enumerate> = new DocumentType<Enumerate>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Enumerate as ActionType.Enumerate})},
  },
  changeCase: CaseStyle.SnakeCase,
});
