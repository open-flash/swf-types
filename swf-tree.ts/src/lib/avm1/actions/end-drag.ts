import { CaseStyle, DocumentType, LiteralType } from "kryo";
import { ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface EndDrag extends ActionBase {
  action: ActionType.EndDrag;
}

export namespace EndDrag {
  export interface Json {
    action: "end-drag";
  }

  export const type: DocumentType<EndDrag> = new DocumentType<EndDrag>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.EndDrag})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
