import { CaseStyle, DocumentType, LiteralType } from "kryo";
import { ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface Increment extends ActionBase {
  action: ActionType.Increment;
}

export namespace Increment {
  export interface Json {
    action: "increment";
  }

  export const type: DocumentType<Increment> = new DocumentType<Increment>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.Increment})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
