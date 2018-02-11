import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface GetTime extends ActionBase {
  action: ActionType.GetTime;
}

export const $GetTime: DocumentIoType<GetTime> = new DocumentType<GetTime>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.GetTime as ActionType.GetTime})},
  },
  changeCase: CaseStyle.SnakeCase,
});
