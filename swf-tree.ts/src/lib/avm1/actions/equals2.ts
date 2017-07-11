import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface Equals2 extends ActionBase {
  action: ActionType.Equals2;
}

export namespace Equals2 {
  export interface Json {
    action: "equals2";
  }

  export const type: DocumentType<Equals2> = new DocumentType<Equals2>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.Equals2})},
    },
    rename: CaseStyle.KebabCase,
  });
}
