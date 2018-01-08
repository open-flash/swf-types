import { CaseStyle, DocumentType, LiteralType } from "kryo";
import { ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface StartDrag extends ActionBase {
  action: ActionType.StartDrag;
}

export namespace StartDrag {
  export interface Json {
    action: "start-drag";
  }

  export const type: DocumentType<StartDrag> = new DocumentType<StartDrag>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.StartDrag})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
