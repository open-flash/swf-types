import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface Throw extends ActionBase {
  action: ActionType.Throw;
}

export namespace Throw {
  export interface Json {
    action: "throw";
  }

  export const type: DocumentType<Throw> = new DocumentType<Throw>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.Throw})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
