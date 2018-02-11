import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface BitAnd extends ActionBase {
  action: ActionType.BitAnd;
}

export const $BitAnd: DocumentIoType<BitAnd> = new DocumentType<BitAnd>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.BitAnd as ActionType.BitAnd})},
  },
  changeCase: CaseStyle.SnakeCase,
});
