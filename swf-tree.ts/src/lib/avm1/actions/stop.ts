import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface Stop extends ActionBase {
  action: ActionType.Stop;
}

export const $Stop: DocumentIoType<Stop> = new DocumentType<Stop>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Stop as ActionType.Stop})},
  },
  changeCase: CaseStyle.SnakeCase,
});
