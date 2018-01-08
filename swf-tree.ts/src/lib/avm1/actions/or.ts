import { CaseStyle, DocumentType, LiteralType } from "kryo";
import { ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface Or extends ActionBase {
  action: ActionType.Or;
}

export namespace Or {
  export interface Json {
    action: "or";
  }

  export const type: DocumentType<Or> = new DocumentType<Or>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.Or})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
