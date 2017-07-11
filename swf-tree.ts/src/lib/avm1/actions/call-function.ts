import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface CallFunction extends ActionBase {
  action: ActionType.CallFunction;
}

export namespace CallFunction {
  export interface Json {
    action: "call-function";
  }

  export const type: DocumentType<CallFunction> = new DocumentType<CallFunction>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.CallFunction})},
    },
    rename: CaseStyle.KebabCase,
  });
}
