import { CaseStyle, DocumentType, LiteralType } from "kryo";
import { ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface NewMethod extends ActionBase {
  action: ActionType.NewMethod;
}

export namespace NewMethod {
  export interface Json {
    action: "new-method";
  }

  export const type: DocumentType<NewMethod> = new DocumentType<NewMethod>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.NewMethod})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
