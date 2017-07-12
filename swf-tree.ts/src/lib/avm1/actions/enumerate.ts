import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface Enumerate extends ActionBase {
  action: ActionType.Enumerate;
}

export namespace Enumerate {
  export interface Json {
    action: "enumerate";
  }

  export const type: DocumentType<Enumerate> = new DocumentType<Enumerate>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.Enumerate})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
