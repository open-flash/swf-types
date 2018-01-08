import { CaseStyle, DocumentType, LiteralType } from "kryo";
import { ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface And extends ActionBase {
  action: ActionType.And;
}

export namespace And {
  export interface Json {
    action: "and";
  }

  export const type: DocumentType<And> = new DocumentType<And>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.And})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
