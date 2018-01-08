import { CaseStyle, DocumentType, LiteralType } from "kryo";
import { ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface Delete extends ActionBase {
  action: ActionType.Delete;
}

export namespace Delete {
  export interface Json {
    action: "delete";
  }

  export const type: DocumentType<Delete> = new DocumentType<Delete>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.Delete})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
