import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface Return extends ActionBase {
  action: ActionType.Return;
}

export const $Return: DocumentIoType<Return> = new DocumentType<Return>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Return as ActionType.Return})},
  },
  changeCase: CaseStyle.SnakeCase,
});
