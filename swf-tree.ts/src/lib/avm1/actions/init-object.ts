import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface InitObject extends ActionBase {
  action: ActionType.InitObject;
}

export const $InitObject: DocumentIoType<InitObject> = new DocumentType<InitObject>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.InitObject as ActionType.InitObject})},
  },
  changeCase: CaseStyle.SnakeCase,
});
