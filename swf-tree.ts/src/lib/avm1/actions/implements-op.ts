import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface ImplementsOp extends ActionBase {
  action: ActionType.ImplementsOp;
}

export const $ImplementsOp: DocumentIoType<ImplementsOp> = new DocumentType<ImplementsOp>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.ImplementsOp as ActionType.ImplementsOp})},
  },
  changeCase: CaseStyle.SnakeCase,
});
