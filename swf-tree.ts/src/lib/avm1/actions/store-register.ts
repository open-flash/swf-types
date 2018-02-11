import { $Uint8 } from "kryo/builtins/uint8";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Uint8 } from "semantic-types";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface StoreRegister extends ActionBase {
  action: ActionType.StoreRegister;
  registerNumber: Uint8;
}

export const $StoreRegister: DocumentIoType<StoreRegister> = new DocumentType<StoreRegister>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.StoreRegister as ActionType.StoreRegister})},
    registerNumber: {type: $Uint8},
  },
  changeCase: CaseStyle.SnakeCase,
});
