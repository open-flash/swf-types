import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface GotoFrame2 extends ActionBase {
  action: ActionType.GotoFrame2;
}

export namespace GotoFrame2 {
  export interface Json {
    action: "goto-frame2";
  }

  export const type: DocumentType<GotoFrame2> = new DocumentType<GotoFrame2>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.GotoFrame2})},
    },
    rename: CaseStyle.KebabCase,
  });
}
