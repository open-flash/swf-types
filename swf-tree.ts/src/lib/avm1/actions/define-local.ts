import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface DefineLocal extends ActionBase {
  action: ActionType.DefineLocal;
}

export namespace DefineLocal {
  export interface Json {
    action: "define-local";
  }

  export const type: DocumentType<DefineLocal> = new DocumentType<DefineLocal>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.DefineLocal})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
