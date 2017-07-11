import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface MbAsciiToChar extends ActionBase {
  action: ActionType.MbAsciiToChar;
}

export namespace MbAsciiToChar {
  export interface Json {
    action: "mb-ascii-to-char";
  }

  export const type: DocumentType<MbAsciiToChar> = new DocumentType<MbAsciiToChar>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.MbAsciiToChar})},
    },
    rename: CaseStyle.KebabCase,
  });
}
