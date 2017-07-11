import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface Play extends ActionBase {
  action: ActionType.Play;
}

export namespace Play {
  export interface Json {
    action: "play";
  }

  export const type: DocumentType<Play> = new DocumentType<Play>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.Play})},
    },
    rename: CaseStyle.KebabCase,
  });
}
