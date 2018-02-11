import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface DefineLocal2 extends ActionBase {
  action: ActionType.DefineLocal2;
}

export const $DefineLocal2: DocumentIoType<DefineLocal2> = new DocumentType<DefineLocal2>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.DefineLocal2 as ActionType.DefineLocal2})},
  },
  changeCase: CaseStyle.SnakeCase,
});
