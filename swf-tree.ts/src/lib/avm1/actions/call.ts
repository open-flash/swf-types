import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface Call extends ActionBase {
  action: ActionType.Call;
}

export namespace Call {
  export interface Json {
    action: "call";
  }

  export const type: DocumentType<Call> = new DocumentType<Call>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.Call})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
