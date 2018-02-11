import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $Action, Action } from "../action";
import { $ActionType, ActionType } from "../action-type";
import { $CatchTarget, CatchTarget } from "../catch-target";
import { ActionBase } from "./_base";

export interface Try extends ActionBase {
  action: ActionType.Try;
  try: Action[];
  catch?: Action[];
  catchTarget?: CatchTarget;
  finally?: Action[];
}

export const $Try: DocumentIoType<Try> = new DocumentType<Try>(() => ({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Try as ActionType.Try})},
    try: {type: new ArrayType({itemType: $Action, maxLength: Infinity})},
    catch: {type: new ArrayType({itemType: $Action, maxLength: Infinity}), optional: true},
    catchTarget: {type: $CatchTarget, optional: true},
    finally: {type: new ArrayType({itemType: $Action, maxLength: Infinity}), optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
}));
