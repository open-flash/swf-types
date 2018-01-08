import { CaseStyle, DocumentType, LiteralType } from "kryo";
import { ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface SetTarget2 extends ActionBase {
  action: ActionType.SetTarget2;
}

export namespace SetTarget2 {
  export interface Json {
    action: "set-target2";
  }

  export const type: DocumentType<SetTarget2> = new DocumentType<SetTarget2>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.SetTarget2})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
