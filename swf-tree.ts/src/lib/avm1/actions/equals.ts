import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface Equals extends ActionBase {
  action: ActionType.Equals;
}

export namespace Equals {
  export interface Json {
    action: "equals";
  }

  export const type: DocumentType<Equals> = new DocumentType<Equals>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.Equals})},
    },
    rename: CaseStyle.KebabCase,
  });
}
