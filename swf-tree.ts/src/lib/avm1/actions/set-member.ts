import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface SetMember extends ActionBase {
  action: ActionType.SetMember;
}

export const $SetMember: DocumentIoType<SetMember> = new DocumentType<SetMember>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.SetMember as ActionType.SetMember})},
  },
  changeCase: CaseStyle.SnakeCase,
});
