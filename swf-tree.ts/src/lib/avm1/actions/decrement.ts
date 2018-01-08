import { CaseStyle, DocumentType, LiteralType } from "kryo";
import { ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface Decrement extends ActionBase {
  action: ActionType.Decrement;
}

export namespace Decrement {
  export interface Json {
    action: "decrement";
  }

  export const type: DocumentType<Decrement> = new DocumentType<Decrement>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.Decrement})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
