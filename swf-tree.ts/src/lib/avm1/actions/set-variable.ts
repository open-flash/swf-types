import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface SetVariable extends ActionBase {
  action: ActionType.SetVariable;
}

export const $SetVariable: DocumentIoType<SetVariable> = new DocumentType<SetVariable>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.SetVariable as ActionType.SetVariable})},
  },
  changeCase: CaseStyle.SnakeCase,
});
