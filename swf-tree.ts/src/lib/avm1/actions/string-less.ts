import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface StringLess extends ActionBase {
  action: ActionType.StringLess;
}

export const $StringLess: DocumentIoType<StringLess> = new DocumentType<StringLess>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.StringLess as ActionType.StringLess})},
  },
  changeCase: CaseStyle.SnakeCase,
});
