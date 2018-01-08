import { CaseStyle, DocumentType, LiteralType } from "kryo";
import { ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface StrictEquals extends ActionBase {
  action: ActionType.StrictEquals;
}

export namespace StrictEquals {
  export interface Json {
    action: "strict-equals";
  }

  export const type: DocumentType<StrictEquals> = new DocumentType<StrictEquals>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.StrictEquals})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
