import { CaseStyle, DocumentType, LiteralType } from "kryo";
import { ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface Stop extends ActionBase {
  action: ActionType.Stop;
}

export namespace Stop {
  export interface Json {
    action: "stop";
  }

  export const type: DocumentType<Stop> = new DocumentType<Stop>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.Stop})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
