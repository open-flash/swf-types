import { CaseStyle, DocumentType, LiteralType } from "kryo";
import { ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface StringEquals extends ActionBase {
  action: ActionType.StringEquals;
}

export namespace StringEquals {
  export interface Json {
    action: "string-equals";
  }

  export const type: DocumentType<StringEquals> = new DocumentType<StringEquals>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.StringEquals})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
