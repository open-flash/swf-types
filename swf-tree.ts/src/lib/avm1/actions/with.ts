import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface With extends ActionBase {
  action: ActionType.With;
}

export namespace With {
  export interface Json {
    action: "with";
  }

  export const type: DocumentType<With> = new DocumentType<With>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.With})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
