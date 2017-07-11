import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface Try extends ActionBase {
  action: ActionType.Try;
}

export namespace Try {
  export interface Json {
    action: "try";
  }

  export const type: DocumentType<Try> = new DocumentType<Try>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.Try})},
    },
    rename: CaseStyle.KebabCase,
  });
}
