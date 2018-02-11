import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface AsciiToChar extends ActionBase {
  action: ActionType.AsciiToChar;
}

export const $AsciiToChar: DocumentIoType<AsciiToChar> = new DocumentType<AsciiToChar>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.AsciiToChar as ActionType.AsciiToChar})},
  },
  changeCase: CaseStyle.SnakeCase,
});
