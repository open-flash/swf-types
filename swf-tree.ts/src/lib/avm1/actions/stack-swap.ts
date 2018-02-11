import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface StackSwap extends ActionBase {
  action: ActionType.StackSwap;
}

export const $StackSwap: DocumentIoType<StackSwap> = new DocumentType<StackSwap>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.StackSwap as ActionType.StackSwap})},
  },
  changeCase: CaseStyle.SnakeCase,
});
