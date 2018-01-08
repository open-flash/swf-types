import { CaseStyle, DocumentType, LiteralType } from "kryo";
import { ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface Subtract extends ActionBase {
  action: ActionType.Subtract;
}

export namespace Subtract {
  export interface Json {
    action: "subtract";
  }

  export const type: DocumentType<Subtract> = new DocumentType<Subtract>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.Subtract})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
