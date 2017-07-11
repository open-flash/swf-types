import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface Return extends ActionBase {
  action: ActionType.Return;
}

export namespace Return {
  export interface Json {
    action: "return";
  }

  export const type: DocumentType<Return> = new DocumentType<Return>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.Return})},
    },
    rename: CaseStyle.KebabCase,
  });
}
