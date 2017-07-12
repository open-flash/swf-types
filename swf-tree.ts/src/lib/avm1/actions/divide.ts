import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface Divide extends ActionBase {
  action: ActionType.Divide;
}

export namespace Divide {
  export interface Json {
    action: "divide";
  }

  export const type: DocumentType<Divide> = new DocumentType<Divide>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.Divide})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
