import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface GetVariable extends ActionBase {
  action: ActionType.GetVariable;
}

export namespace GetVariable {
  export interface Json {
    action: "get-variable";
  }

  export const type: DocumentType<GetVariable> = new DocumentType<GetVariable>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.GetVariable})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
