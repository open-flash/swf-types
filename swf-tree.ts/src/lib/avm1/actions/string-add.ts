import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface StringAdd extends ActionBase {
  action: ActionType.StringAdd;
}

export namespace StringAdd {
  export interface Json {
    action: "string-add";
  }

  export const type: DocumentType<StringAdd> = new DocumentType<StringAdd>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.StringAdd})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
