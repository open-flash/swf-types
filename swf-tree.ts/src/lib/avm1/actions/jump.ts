import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { IntegerType } from "kryo/types/integer";
import { LiteralType } from "kryo/types/literal";
import { SintSize } from "semantic-types";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface Jump extends ActionBase {
  action: ActionType.Jump;
  offset: SintSize;
}

export const $Jump: DocumentIoType<Jump> = new DocumentType<Jump>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Jump as ActionType.Jump})},
    offset: {type: new IntegerType()},
  },
  changeCase: CaseStyle.SnakeCase,
});
