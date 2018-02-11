import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { IntegerType } from "kryo/types/integer";
import { LiteralType } from "kryo/types/literal";
import { Uint8 } from "semantic-types";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface Unknown extends ActionBase {
  action: ActionType.Unknown;
  actionCode: Uint8;
}

export const $Unknown: DocumentIoType<Unknown> = new DocumentType<Unknown>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Unknown as ActionType.Unknown})},
    actionCode: {type: new IntegerType()},
  },
  changeCase: CaseStyle.SnakeCase,
});
