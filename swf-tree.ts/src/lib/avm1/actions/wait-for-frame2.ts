import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { IntegerType } from "kryo/types/integer";
import { LiteralType } from "kryo/types/literal";
import { UintSize } from "semantic-types";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface WaitForFrame2 extends ActionBase {
  action: ActionType.WaitForFrame2;
  skipCount: UintSize;
}

export const $WaitForFrame2: DocumentIoType<WaitForFrame2> = new DocumentType<WaitForFrame2>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.WaitForFrame2 as ActionType.WaitForFrame2})},
    skipCount: {type: new IntegerType()},
  },
  changeCase: CaseStyle.SnakeCase,
});
