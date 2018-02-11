import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { IntegerType } from "kryo/types/integer";
import { LiteralType } from "kryo/types/literal";
import { SintSize } from "semantic-types";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface If extends ActionBase {
  action: ActionType.If;
  offset: SintSize;
}

export const $If: DocumentIoType<If> = new DocumentType<If>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.If as ActionType.If})},
    offset: {type: new IntegerType()},
  },
  changeCase: CaseStyle.SnakeCase,
});
