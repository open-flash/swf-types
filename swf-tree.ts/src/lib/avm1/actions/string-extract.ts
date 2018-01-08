import { CaseStyle, DocumentType, LiteralType } from "kryo";
import { ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface StringExtract extends ActionBase {
  action: ActionType.StringExtract;
}

export namespace StringExtract {
  export interface Json {
    action: "string-extract";
  }

  export const type: DocumentType<StringExtract> = new DocumentType<StringExtract>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.StringExtract})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
