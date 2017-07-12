import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface NewObject extends ActionBase {
  action: ActionType.NewObject;
}

export namespace NewObject {
  export interface Json {
    action: "new-object";
  }

  export const type: DocumentType<NewObject> = new DocumentType<NewObject>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.NewObject})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
