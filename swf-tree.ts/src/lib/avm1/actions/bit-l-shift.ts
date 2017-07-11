import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface BitLShift extends ActionBase {
  action: ActionType.BitLShift;
}

export namespace BitLShift {
  export interface Json {
    action: "bit-l-shift";
  }

  export const type: DocumentType<BitLShift> = new DocumentType<BitLShift>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.BitLShift})},
    },
    rename: CaseStyle.KebabCase,
  });
}
