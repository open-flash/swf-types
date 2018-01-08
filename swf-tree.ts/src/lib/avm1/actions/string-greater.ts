import { CaseStyle, DocumentType, LiteralType } from "kryo";
import { ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface StringGreater extends ActionBase {
  action: ActionType.StringGreater;
}

export namespace StringGreater {
  export interface Json {
    action: "string-greater";
  }

  export const type: DocumentType<StringGreater> = new DocumentType<StringGreater>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.StringGreater})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
