import {CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint8} from "semantic-types";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface StoreRegister extends ActionBase {
  action: ActionType.StoreRegister;
  registerNumber: Uint8;
}

export namespace StoreRegister {
  export interface Json {
    action: "store-register";
    "register-number": number;
  }

  export const type: DocumentType<StoreRegister> = new DocumentType<StoreRegister>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.StoreRegister})},
      registerNumber: {type: new Int32Type()},
    },
    rename: CaseStyle.KebabCase,
  });
}
