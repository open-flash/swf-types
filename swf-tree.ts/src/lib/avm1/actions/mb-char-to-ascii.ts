import { CaseStyle, DocumentType, LiteralType } from "kryo";
import { ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface MbCharToAscii extends ActionBase {
  action: ActionType.MbCharToAscii;
}

export namespace MbCharToAscii {
  export interface Json {
    action: "mb-char-to-ascii";
  }

  export const type: DocumentType<MbCharToAscii> = new DocumentType<MbCharToAscii>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.MbCharToAscii})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
