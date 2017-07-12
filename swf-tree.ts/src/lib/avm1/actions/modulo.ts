import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface Modulo extends ActionBase {
  action: ActionType.Modulo;
}

export namespace Modulo {
  export interface Json {
    action: "modulo";
  }

  export const type: DocumentType<Modulo> = new DocumentType<Modulo>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.Modulo})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
