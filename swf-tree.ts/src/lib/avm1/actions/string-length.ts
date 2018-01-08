import { CaseStyle, DocumentType, LiteralType } from "kryo";
import { ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface StringLength extends ActionBase {
  action: ActionType.StringLength;
}

export namespace StringLength {
  export interface Json {
    action: "string-length";
  }

  export const type: DocumentType<StringLength> = new DocumentType<StringLength>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.StringLength})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
