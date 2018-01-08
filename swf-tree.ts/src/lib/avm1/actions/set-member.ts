import { CaseStyle, DocumentType, LiteralType } from "kryo";
import { ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface SetMember extends ActionBase {
  action: ActionType.SetMember;
}

export namespace SetMember {
  export interface Json {
    action: "set-member";
  }

  export const type: DocumentType<SetMember> = new DocumentType<SetMember>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.SetMember})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
