import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface MbStringLength extends ActionBase {
  action: ActionType.MbStringLength;
}

export namespace MbStringLength {
  export interface Json {
    action: "mb-string-length";
  }

  export const type: DocumentType<MbStringLength> = new DocumentType<MbStringLength>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.MbStringLength})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
