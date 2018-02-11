import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface Extends extends ActionBase {
  action: ActionType.Extends;
}

export const $Extends: DocumentIoType<Extends> = new DocumentType<Extends>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Extends as ActionType.Extends})},
  },
  changeCase: CaseStyle.SnakeCase,
});
