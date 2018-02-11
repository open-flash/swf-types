import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface Enumerate2 extends ActionBase {
  action: ActionType.Enumerate2;
}

export const $Enumerate2: DocumentIoType<Enumerate2> = new DocumentType<Enumerate2>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Enumerate2 as ActionType.Enumerate2})},
  },
  changeCase: CaseStyle.SnakeCase,
});
