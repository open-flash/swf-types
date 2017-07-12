import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface GetProperty extends ActionBase {
  action: ActionType.GetProperty;
}

export namespace GetProperty {
  export interface Json {
    action: "get-property";
  }

  export const type: DocumentType<GetProperty> = new DocumentType<GetProperty>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.GetProperty})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
