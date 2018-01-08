import { CaseStyle, DocumentType, LiteralType } from "kryo";
import { ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface Less2 extends ActionBase {
  action: ActionType.Less2;
}

export namespace Less2 {
  export interface Json {
    action: "less2";
  }

  export const type: DocumentType<Less2> = new DocumentType<Less2>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.Less2})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
