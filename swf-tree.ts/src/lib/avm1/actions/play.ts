import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface Play extends ActionBase {
  action: ActionType.Play;
}

export const $Play: DocumentIoType<Play> = new DocumentType<Play>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Play as ActionType.Play})},
  },
  changeCase: CaseStyle.SnakeCase,
});
