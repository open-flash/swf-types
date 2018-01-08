import { CaseStyle, DocumentType, LiteralType } from "kryo";
import { ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface SetProperty extends ActionBase {
  action: ActionType.SetProperty;
}

export namespace SetProperty {
  export interface Json {
    action: "set-property";
  }

  export const type: DocumentType<SetProperty> = new DocumentType<SetProperty>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.SetProperty})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
