import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface ToString extends ActionBase {
  action: ActionType.ToString;
}

export const $ToString: DocumentIoType<ToString> = new DocumentType<ToString>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.ToString as ActionType.ToString})},
  },
  changeCase: CaseStyle.SnakeCase,
});
