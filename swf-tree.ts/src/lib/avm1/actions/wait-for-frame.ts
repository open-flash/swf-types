import {CaseStyle, DocumentType, IntegerType, LiteralType} from "kryo";
import {UintSize} from "semantic-types";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface WaitForFrame extends ActionBase {
  action: ActionType.WaitForFrame;
  frame: UintSize;
  skipCount: UintSize;
}

export namespace WaitForFrame {
  export interface Json {
    action: "wait-for-frame";
    frame: number;
    skip_count: number;
  }

  export const type: DocumentType<WaitForFrame> = new DocumentType<WaitForFrame>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.WaitForFrame})},
      frame: {type: new IntegerType()},
      skipCount: {type: new IntegerType()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
