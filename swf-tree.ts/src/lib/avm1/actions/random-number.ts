import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface RandomNumber extends ActionBase {
  action: ActionType.RandomNumber;
}

export namespace RandomNumber {
  export interface Json {
    action: "random-number";
  }

  export const type: DocumentType<RandomNumber> = new DocumentType<RandomNumber>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.RandomNumber})},
    },
    rename: CaseStyle.KebabCase,
  });
}
