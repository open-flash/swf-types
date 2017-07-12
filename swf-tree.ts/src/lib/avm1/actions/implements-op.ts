import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface ImplementsOp extends ActionBase {
  action: ActionType.ImplementsOp;
}

export namespace ImplementsOp {
  export interface Json {
    action: "implements-op";
  }

  export const type: DocumentType<ImplementsOp> = new DocumentType<ImplementsOp>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.ImplementsOp})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
