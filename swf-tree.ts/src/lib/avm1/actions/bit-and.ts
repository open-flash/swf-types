import { CaseStyle, DocumentType, LiteralType } from "kryo";
import { ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface BitAnd extends ActionBase {
  action: ActionType.BitAnd;
}

export namespace BitAnd {
  export interface Json {
    action: "bit-and";
  }

  export const type: DocumentType<BitAnd> = new DocumentType<BitAnd>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.BitAnd})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
