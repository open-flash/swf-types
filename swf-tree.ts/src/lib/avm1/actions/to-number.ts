import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface ToNumber extends ActionBase {
  action: ActionType.ToNumber;
}

export namespace ToNumber {
  export interface Json {
    action: "to-number";
  }

  export const type: DocumentType<ToNumber> = new DocumentType<ToNumber>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.ToNumber})},
    },
    rename: CaseStyle.KebabCase,
  });
}
