import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface MbCharToAscii extends ActionBase {
  action: ActionType.MbCharToAscii;
}

export const $MbCharToAscii: DocumentIoType<MbCharToAscii> = new DocumentType<MbCharToAscii>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.MbCharToAscii as ActionType.MbCharToAscii})},
  },
  changeCase: CaseStyle.SnakeCase,
});
