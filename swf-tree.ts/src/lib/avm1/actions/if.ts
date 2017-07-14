import {CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {SintSize} from "semantic-types";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface If extends ActionBase {
  action: ActionType.If;
  offset: SintSize;
}

export namespace If {
  export interface Json {
    action: "if";
    offset: number;
  }

  export const type: DocumentType<If> = new DocumentType<If>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.If})},
      offset: {type: new Int32Type()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
