import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface Add2 extends ActionBase {
  action: ActionType.Add2;
}

export namespace Add2 {
  export interface Json {
    action: "add2";
  }

  export const type: DocumentType<Add2> = new DocumentType<Add2>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.Add2})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
