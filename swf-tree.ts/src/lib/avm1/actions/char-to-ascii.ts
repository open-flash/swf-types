import { CaseStyle, DocumentType, LiteralType } from "kryo";
import { ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface CharToAscii extends ActionBase {
  action: ActionType.CharToAscii;
}

export namespace CharToAscii {
  export interface Json {
    action: "char-to-ascii";
  }

  export const type: DocumentType<CharToAscii> = new DocumentType<CharToAscii>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.CharToAscii})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
