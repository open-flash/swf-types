import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { $Value, Value } from "../value";
import { ActionBase } from "./_base";

export interface Push extends ActionBase {
  action: ActionType.Push;
  values: Value[];
}

export const $Push: DocumentIoType<Push> = new DocumentType<Push>(() => ({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Push as ActionType.Push})},
    values: {type: new ArrayType({itemType: $Value, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
}));
