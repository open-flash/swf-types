import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface GetVariable extends ActionBase {
  action: ActionType.GetVariable;
}

export const $GetVariable: DocumentIoType<GetVariable> = new DocumentType<GetVariable>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.GetVariable as ActionType.GetVariable})},
  },
  changeCase: CaseStyle.SnakeCase,
});
