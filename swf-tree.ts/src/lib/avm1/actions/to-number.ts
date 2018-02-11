import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface ToNumber extends ActionBase {
  action: ActionType.ToNumber;
}

export const $ToNumber: DocumentIoType<ToNumber> = new DocumentType<ToNumber>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.ToNumber as ActionType.ToNumber})},
  },
  changeCase: CaseStyle.SnakeCase,
});
