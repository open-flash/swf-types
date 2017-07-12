import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface PreviousFrame extends ActionBase {
  action: ActionType.PreviousFrame;
}

export namespace PreviousFrame {
  export interface Json {
    action: "previous-frame";
  }

  export const type: DocumentType<PreviousFrame> = new DocumentType<PreviousFrame>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.PreviousFrame})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
