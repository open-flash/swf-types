import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface InitArray extends ActionBase {
  action: ActionType.InitArray;
}

export const $InitArray: DocumentIoType<InitArray> = new DocumentType<InitArray>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.InitArray as ActionType.InitArray})},
  },
  changeCase: CaseStyle.SnakeCase,
});
