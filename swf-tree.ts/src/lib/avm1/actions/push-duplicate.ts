import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface PushDuplicate extends ActionBase {
  action: ActionType.PushDuplicate;
}

export const $PushDuplicate: DocumentIoType<PushDuplicate> = new DocumentType<PushDuplicate>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.PushDuplicate as ActionType.PushDuplicate})},
  },
  changeCase: CaseStyle.SnakeCase,
});
