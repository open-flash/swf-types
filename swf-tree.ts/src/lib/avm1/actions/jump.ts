import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface Jump extends ActionBase {
  action: ActionType.Jump;
}

export namespace Jump {
  export interface Json {
    action: "jump";
  }

  export const type: DocumentType<Jump> = new DocumentType<Jump>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.Jump})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
