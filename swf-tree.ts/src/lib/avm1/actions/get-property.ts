import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface GetProperty extends ActionBase {
  action: ActionType.GetProperty;
}

export const $GetProperty: DocumentIoType<GetProperty> = new DocumentType<GetProperty>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.GetProperty as ActionType.GetProperty})},
  },
  changeCase: CaseStyle.SnakeCase,
});
