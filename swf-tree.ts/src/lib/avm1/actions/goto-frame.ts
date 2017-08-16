import {CaseStyle, DocumentType, IntegerType, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface GotoFrame extends ActionBase {
  action: ActionType.GotoFrame;
  frame: Uint16;
}

export namespace GotoFrame {
  export interface Json {
    action: "goto-frame";
    frame: number;
  }

  export const type: DocumentType<GotoFrame> = new DocumentType<GotoFrame>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.GotoFrame})},
      frame: {type: new IntegerType()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
