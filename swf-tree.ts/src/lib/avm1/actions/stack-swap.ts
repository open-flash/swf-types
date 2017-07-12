import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface StackSwap extends ActionBase {
  action: ActionType.StackSwap;
}

export namespace StackSwap {
  export interface Json {
    action: "stack-swap";
  }

  export const type: DocumentType<StackSwap> = new DocumentType<StackSwap>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.StackSwap})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
