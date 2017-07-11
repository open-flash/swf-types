import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface GetMember extends ActionBase {
  action: ActionType.GetMember;
}

export namespace GetMember {
  export interface Json {
    action: "get-member";
  }

  export const type: DocumentType<GetMember> = new DocumentType<GetMember>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.GetMember})},
    },
    rename: CaseStyle.KebabCase,
  });
}
