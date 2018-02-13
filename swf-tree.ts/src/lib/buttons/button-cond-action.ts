import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { $Action } from "../avm1";
import { Action } from "../avm1/action";
import { $ButtonCond, ButtonCond } from "./button-cond";

export interface ButtonCondAction {
  conditions?: ButtonCond;
  actions: Action[];
}

export const $ButtonCondAction: DocumentIoType<ButtonCondAction> = new DocumentType<ButtonCondAction>({
  properties: {
    conditions: {type: $ButtonCond, optional: true},
    actions: {type: new ArrayType({itemType: $Action, maxLength: Infinity}), optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
});
