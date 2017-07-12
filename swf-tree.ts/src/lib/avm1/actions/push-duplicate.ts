import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface PushDuplicate extends ActionBase {
  action: ActionType.PushDuplicate;
}

export namespace PushDuplicate {
  export interface Json {
    action: "push-duplicate";
  }

  export const type: DocumentType<PushDuplicate> = new DocumentType<PushDuplicate>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.PushDuplicate})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
