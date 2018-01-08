import { CaseStyle, DocumentType, LiteralType } from "kryo";
import { ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface BitURShift extends ActionBase {
  action: ActionType.BitURShift;
}

export namespace BitURShift {
  export interface Json {
    action: "bit-u-r-shift";
  }

  export const type: DocumentType<BitURShift> = new DocumentType<BitURShift>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.BitURShift})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
