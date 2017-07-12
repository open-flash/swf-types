import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface If extends ActionBase {
  action: ActionType.If;
}

export namespace If {
  export interface Json {
    action: "if";
  }

  export const type: DocumentType<If> = new DocumentType<If>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.If})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
