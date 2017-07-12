import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface DefineFunction extends ActionBase {
  action: ActionType.DefineFunction;
}

export namespace DefineFunction {
  export interface Json {
    action: "define-function";
  }

  export const type: DocumentType<DefineFunction> = new DocumentType<DefineFunction>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.DefineFunction})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
