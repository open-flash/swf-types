import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface BitXor extends ActionBase {
  action: ActionType.BitXor;
}

export namespace BitXor {
  export interface Json {
    action: "bit-xor";
  }

  export const type: DocumentType<BitXor> = new DocumentType<BitXor>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.BitXor})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
