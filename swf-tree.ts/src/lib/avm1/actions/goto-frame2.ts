import {BooleanType, CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {UintSize} from "semantic-types";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface GotoFrame2 extends ActionBase {
  action: ActionType.GotoFrame2;
  play: boolean;
  sceneBias: UintSize;
}

export namespace GotoFrame2 {
  export interface Json {
    action: "goto-frame2";
    play: boolean;
    scene_bias: number;
  }

  export const type: DocumentType<GotoFrame2> = new DocumentType<GotoFrame2>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.GotoFrame2})},
      play: {type: new BooleanType()},
      sceneBias: {type: new Int32Type()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
