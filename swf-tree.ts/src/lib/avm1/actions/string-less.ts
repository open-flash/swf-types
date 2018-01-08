import { CaseStyle, DocumentType, LiteralType } from "kryo";
import { ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface StringLess extends ActionBase {
  action: ActionType.StringLess;
}

export namespace StringLess {
  export interface Json {
    action: "string-less";
  }

  export const type: DocumentType<StringLess> = new DocumentType<StringLess>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.StringLess})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
