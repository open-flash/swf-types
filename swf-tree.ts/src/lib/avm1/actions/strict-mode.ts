import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface StrictMode extends ActionBase {
  action: ActionType.StrictMode;
}

export namespace StrictMode {
  export interface Json {
    action: "strict-mode";
  }

  export const type: DocumentType<StrictMode> = new DocumentType<StrictMode>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.StrictMode})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
