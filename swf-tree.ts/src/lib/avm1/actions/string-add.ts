import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface StringAdd extends ActionBase {
  action: ActionType.StringAdd;
}

export const $StringAdd: DocumentIoType<StringAdd> = new DocumentType<StringAdd>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.StringAdd as ActionType.StringAdd})},
  },
  changeCase: CaseStyle.SnakeCase,
});
