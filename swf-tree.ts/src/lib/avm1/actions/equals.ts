import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface Equals extends ActionBase {
  action: ActionType.Equals;
}

export const $Equals: DocumentIoType<Equals> = new DocumentType<Equals>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Equals as ActionType.Equals})},
  },
  changeCase: CaseStyle.SnakeCase,
});
