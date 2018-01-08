import { CaseStyle, DocumentType, LiteralType } from "kryo";
import { ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface Delete2 extends ActionBase {
  action: ActionType.Delete2;
}

export namespace Delete2 {
  export interface Json {
    action: "delete2";
  }

  export const type: DocumentType<Delete2> = new DocumentType<Delete2>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.Delete2})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
