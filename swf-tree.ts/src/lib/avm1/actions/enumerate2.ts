import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface Enumerate2 extends ActionBase {
  action: ActionType.Enumerate2;
}

export namespace Enumerate2 {
  export interface Json {
    action: "enumerate2";
  }

  export const type: DocumentType<Enumerate2> = new DocumentType<Enumerate2>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.Enumerate2})},
    },
    rename: CaseStyle.KebabCase,
  });
}
