import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Ucs2StringType } from "kryo/types/ucs2-string";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface SetTarget extends ActionBase {
  action: ActionType.SetTarget;
  targetName: string;
}

export const $SetTarget: DocumentIoType<SetTarget> = new DocumentType<SetTarget>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.SetTarget as ActionType.SetTarget})},
    targetName: {type: new Ucs2StringType({maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
