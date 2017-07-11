import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface Add extends ActionBase {
  action: ActionType.Add;
}

export namespace Add {
  export interface Json {
    action: "add";
  }

  export const type: DocumentType<Add> = new DocumentType<Add>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.Add})},
    },
    rename: CaseStyle.KebabCase,
  });
}
