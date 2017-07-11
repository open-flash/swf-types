import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface ToString extends ActionBase {
  action: ActionType.ToString;
}

export namespace ToString {
  export interface Json {
    action: "to-string";
  }

  export const type: DocumentType<ToString> = new DocumentType<ToString>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.ToString})},
    },
    rename: CaseStyle.KebabCase,
  });
}
