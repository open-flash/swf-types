import { CaseStyle, DocumentType, LiteralType } from "kryo";
import { ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface SetVariable extends ActionBase {
  action: ActionType.SetVariable;
}

export namespace SetVariable {
  export interface Json {
    action: "set-variable";
  }

  export const type: DocumentType<SetVariable> = new DocumentType<SetVariable>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.SetVariable})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
