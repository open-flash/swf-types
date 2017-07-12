import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface DefineLocal2 extends ActionBase {
  action: ActionType.DefineLocal2;
}

export namespace DefineLocal2 {
  export interface Json {
    action: "define-local2";
  }

  export const type: DocumentType<DefineLocal2> = new DocumentType<DefineLocal2>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.DefineLocal2})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
