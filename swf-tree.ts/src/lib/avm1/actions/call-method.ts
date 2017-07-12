import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface CallMethod extends ActionBase {
  action: ActionType.CallMethod;
}

export namespace CallMethod {
  export interface Json {
    action: "call-method";
  }

  export const type: DocumentType<CallMethod> = new DocumentType<CallMethod>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.CallMethod})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
