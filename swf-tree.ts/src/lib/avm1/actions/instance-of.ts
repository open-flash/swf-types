import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface InstanceOf extends ActionBase {
  action: ActionType.InstanceOf;
}

export const $InstanceOf: DocumentIoType<InstanceOf> = new DocumentType<InstanceOf>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.InstanceOf as ActionType.InstanceOf})},
  },
  changeCase: CaseStyle.SnakeCase,
});
