import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface EndDrag extends ActionBase {
  action: ActionType.EndDrag;
}

export const $EndDrag: DocumentIoType<EndDrag> = new DocumentType<EndDrag>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.EndDrag as ActionType.EndDrag})},
  },
  changeCase: CaseStyle.SnakeCase,
});
