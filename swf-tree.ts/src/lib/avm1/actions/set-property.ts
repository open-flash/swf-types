import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface SetProperty extends ActionBase {
  action: ActionType.SetProperty;
}

export const $SetProperty: DocumentIoType<SetProperty> = new DocumentType<SetProperty>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.SetProperty as ActionType.SetProperty})},
  },
  changeCase: CaseStyle.SnakeCase,
});
