import {CaseStyle, DocumentType, IntegerType, LiteralType} from "kryo";
import {SintSize} from "semantic-types";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface Jump extends ActionBase {
  action: ActionType.Jump;
  offset: SintSize;
}

export namespace Jump {
  export interface Json {
    action: "jump";
    offset: number;
  }

  export const type: DocumentType<Jump> = new DocumentType<Jump>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.Jump})},
      offset: {type: new IntegerType()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
