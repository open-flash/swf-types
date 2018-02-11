import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface StartDrag extends ActionBase {
  action: ActionType.StartDrag;
}

export const $StartDrag: DocumentIoType<StartDrag> = new DocumentType<StartDrag>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.StartDrag as ActionType.StartDrag})},
  },
  changeCase: CaseStyle.SnakeCase,
});
