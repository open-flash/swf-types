import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface AsciiToChar extends ActionBase {
  action: ActionType.AsciiToChar;
}

export namespace AsciiToChar {
  export interface Json {
    action: "ascii-to-char";
  }

  export const type: DocumentType<AsciiToChar> = new DocumentType<AsciiToChar>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.AsciiToChar})},
    },
    rename: CaseStyle.KebabCase,
  });
}
