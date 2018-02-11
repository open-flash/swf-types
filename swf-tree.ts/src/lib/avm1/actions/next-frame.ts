import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface NextFrame extends ActionBase {
  action: ActionType.NextFrame;
}

export const $NextFrame: DocumentIoType<NextFrame> = new DocumentType<NextFrame>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.NextFrame as ActionType.NextFrame})},
  },
  changeCase: CaseStyle.SnakeCase,
});
