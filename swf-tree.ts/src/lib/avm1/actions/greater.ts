import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface Greater extends ActionBase {
  action: ActionType.Greater;
}

export namespace Greater {
  export interface Json {
    action: "greater";
  }

  export const type: DocumentType<Greater> = new DocumentType<Greater>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.Greater})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
