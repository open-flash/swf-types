import {CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";
import {UintSize} from "semantic-types";

export interface WaitForFrame extends ActionBase {
  action: ActionType.WaitForFrame;
  frame: UintSize;
  skipCount: UintSize;
}

export namespace WaitForFrame {
  export interface Json {
    action: "wait-for-frame";
    frame: number;
    "skip-count": number;
  }

  export const type: DocumentType<WaitForFrame> = new DocumentType<WaitForFrame>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.WaitForFrame})},
      frame: {type: new Int32Type()},
      skipCount: {type: new Int32Type()},
    },
    rename: CaseStyle.KebabCase,
  });
}
