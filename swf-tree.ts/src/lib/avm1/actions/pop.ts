import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface Pop extends ActionBase {
  action: ActionType.Pop;
}

export namespace Pop {
  export interface Json {
    action: "pop";
  }

  export const type: DocumentType<Pop> = new DocumentType<Pop>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.Pop})},
    },
    rename: CaseStyle.KebabCase,
  });
}
