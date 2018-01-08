import { CaseStyle, DocumentType, LiteralType } from "kryo";
import { ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface BitRShift extends ActionBase {
  action: ActionType.BitRShift;
}

export namespace BitRShift {
  export interface Json {
    action: "bit-r-shift";
  }

  export const type: DocumentType<BitRShift> = new DocumentType<BitRShift>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.BitRShift})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
