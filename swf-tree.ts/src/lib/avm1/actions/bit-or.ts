import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface BitOr extends ActionBase {
  action: ActionType.BitOr;
}

export namespace BitOr {
  export interface Json {
    action: "bit-or";
  }

  export const type: DocumentType<BitOr> = new DocumentType<BitOr>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.BitOr})},
    },
    rename: CaseStyle.KebabCase,
  });
}
