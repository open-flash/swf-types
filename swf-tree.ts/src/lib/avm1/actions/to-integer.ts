import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface ToInteger extends ActionBase {
  action: ActionType.ToInteger;
}

export namespace ToInteger {
  export interface Json {
    action: "to-integer";
  }

  export const type: DocumentType<ToInteger> = new DocumentType<ToInteger>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.ToInteger})},
    },
    rename: CaseStyle.KebabCase,
  });
}
