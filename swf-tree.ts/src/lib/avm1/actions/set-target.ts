import {CaseStyle, DocumentType, LiteralType, Ucs2StringType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface SetTarget extends ActionBase {
  action: ActionType.SetTarget;
  targetName: string;
}

export namespace SetTarget {
  export interface Json {
    action: "set-target";
    targetName: string;
  }

  export const type: DocumentType<SetTarget> = new DocumentType<SetTarget>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.SetTarget})},
      targetName: {type: new Ucs2StringType({maxLength: Infinity})},
    },
    rename: CaseStyle.KebabCase,
  });
}
