import { $Boolean } from "kryo/builtins/boolean";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { IntegerType } from "kryo/types/integer";
import { LiteralType } from "kryo/types/literal";
import { UintSize } from "semantic-types";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface GotoFrame2 extends ActionBase {
  action: ActionType.GotoFrame2;
  play: boolean;
  sceneBias: UintSize;
}

export const $GotoFrame2: DocumentIoType<GotoFrame2> = new DocumentType<GotoFrame2>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.GotoFrame2 as ActionType.GotoFrame2})},
    play: {type: $Boolean},
    sceneBias: {type: new IntegerType()},
  },
  changeCase: CaseStyle.SnakeCase,
});
