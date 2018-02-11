import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface Equals2 extends ActionBase {
  action: ActionType.Equals2;
}

export const $Equals2: DocumentIoType<Equals2> = new DocumentType<Equals2>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Equals2 as ActionType.Equals2})},
  },
  changeCase: CaseStyle.SnakeCase,
});
