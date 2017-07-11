import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface InitObject extends ActionBase {
  action: ActionType.InitObject;
}

export namespace InitObject {
  export interface Json {
    action: "init-object";
  }

  export const type: DocumentType<InitObject> = new DocumentType<InitObject>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.InitObject})},
    },
    rename: CaseStyle.KebabCase,
  });
}
