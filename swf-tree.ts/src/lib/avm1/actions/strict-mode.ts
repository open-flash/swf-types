import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface StrictMode extends ActionBase {
  action: ActionType.StrictMode;
}

export const $StrictMode: DocumentIoType<StrictMode> = new DocumentType<StrictMode>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.StrictMode as ActionType.StrictMode})},
  },
  changeCase: CaseStyle.SnakeCase,
});
