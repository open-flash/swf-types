import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface CallMethod extends ActionBase {
  action: ActionType.CallMethod;
}

export const $CallMethod: DocumentIoType<CallMethod> = new DocumentType<CallMethod>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.CallMethod as ActionType.CallMethod})},
  },
  changeCase: CaseStyle.SnakeCase,
});
