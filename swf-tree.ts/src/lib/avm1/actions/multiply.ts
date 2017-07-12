import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface Multiply extends ActionBase {
  action: ActionType.Multiply;
}

export namespace Multiply {
  export interface Json {
    action: "multiply";
  }

  export const type: DocumentType<Multiply> = new DocumentType<Multiply>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.Multiply})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
