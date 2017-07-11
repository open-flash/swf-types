import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface Not extends ActionBase {
  action: ActionType.Not;
}

export namespace Not {
  export interface Json {
    action: "not";
  }

  export const type: DocumentType<Not> = new DocumentType<Not>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.Not})},
    },
    rename: CaseStyle.KebabCase,
  });
}
