import { CaseStyle, DocumentType, LiteralType } from "kryo";
import { ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface Trace extends ActionBase {
  action: ActionType.Trace;
}

export namespace Trace {
  export interface Json {
    action: "trace";
  }

  export const type: DocumentType<Trace> = new DocumentType<Trace>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.Trace})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
