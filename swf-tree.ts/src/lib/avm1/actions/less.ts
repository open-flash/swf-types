import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface Less extends ActionBase {
  action: ActionType.Less;
}

export const $Less: DocumentIoType<Less> = new DocumentType<Less>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Less as ActionType.Less})},
  },
  changeCase: CaseStyle.SnakeCase,
});
