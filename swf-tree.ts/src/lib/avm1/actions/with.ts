import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $Action, Action } from "../action";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface With extends ActionBase {
  action: ActionType.With;
  with: Action[];
}

export const $With: DocumentIoType<With> = new DocumentType<With>(() => ({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.With as ActionType.With})},
    with: {type: new ArrayType({itemType: $Action, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
}));
