import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface NextFrame extends ActionBase {
  action: ActionType.NextFrame;
}

export namespace NextFrame {
  export interface Json {
    action: "next-frame";
  }

  export const type: DocumentType<NextFrame> = new DocumentType<NextFrame>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.NextFrame})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
