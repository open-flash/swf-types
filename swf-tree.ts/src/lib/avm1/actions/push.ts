import {ArrayType, CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {Value} from "../value";
import {ActionBase} from "./_base";

export interface Push extends ActionBase {
  action: ActionType.Push;
  values: Value[];
}

export namespace Push {
  export interface Json {
    action: "push";
    values: Value.Json[];
  }

  export const type: DocumentType<Push> = new DocumentType<Push>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.Push})},
      values: {type: new ArrayType({itemType: Value.type, maxLength: Infinity})},
    },
    rename: CaseStyle.KebabCase,
  });
}
