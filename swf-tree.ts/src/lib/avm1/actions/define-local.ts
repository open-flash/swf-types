import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface DefineLocal extends ActionBase {
  action: ActionType.DefineLocal;
}

export const $DefineLocal: DocumentIoType<DefineLocal> = new DocumentType<DefineLocal>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.DefineLocal as ActionType.DefineLocal})},
  },
  changeCase: CaseStyle.SnakeCase,
});
