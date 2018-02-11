import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Ucs2StringType } from "kryo/types/ucs2-string";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface GotoLabel extends ActionBase {
  action: ActionType.GotoLabel;
  label: string;
}

export const $GotoLabel: DocumentIoType<GotoLabel> = new DocumentType<GotoLabel>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.GotoLabel as ActionType.GotoLabel})},
    label: {type: new Ucs2StringType({maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
