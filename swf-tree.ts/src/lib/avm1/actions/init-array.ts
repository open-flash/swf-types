import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface InitArray extends ActionBase {
  action: ActionType.InitArray;
}

export namespace InitArray {
  export interface Json {
    action: "init-array";
  }

  export const type: DocumentType<InitArray> = new DocumentType<InitArray>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.InitArray})},
    },
    rename: CaseStyle.KebabCase,
  });
}
