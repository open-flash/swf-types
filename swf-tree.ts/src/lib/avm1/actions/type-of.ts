import { CaseStyle, DocumentType, LiteralType } from "kryo";
import { ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface TypeOf extends ActionBase {
  action: ActionType.TypeOf;
}

export namespace TypeOf {
  export interface Json {
    action: "type-of";
  }

  export const type: DocumentType<TypeOf> = new DocumentType<TypeOf>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.TypeOf})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
