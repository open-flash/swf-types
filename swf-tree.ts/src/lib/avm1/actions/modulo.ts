import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface Modulo extends ActionBase {
  action: ActionType.Modulo;
}

export const $Modulo: DocumentIoType<Modulo> = new DocumentType<Modulo>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Modulo as ActionType.Modulo})},
  },
  changeCase: CaseStyle.SnakeCase,
});
