import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface GetTime extends ActionBase {
  action: ActionType.GetTime;
}

export namespace GetTime {
  export interface Json {
    action: "get-time";
  }

  export const type: DocumentType<GetTime> = new DocumentType<GetTime>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.GetTime})},
    },
    rename: CaseStyle.KebabCase,
  });
}
