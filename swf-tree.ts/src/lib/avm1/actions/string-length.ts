import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface StringLength extends ActionBase {
  action: ActionType.StringLength;
}

export const $StringLength: DocumentIoType<StringLength> = new DocumentType<StringLength>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.StringLength as ActionType.StringLength})},
  },
  changeCase: CaseStyle.SnakeCase,
});
