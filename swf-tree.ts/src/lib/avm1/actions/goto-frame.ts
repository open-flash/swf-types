import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Uint16 } from "semantic-types";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface GotoFrame extends ActionBase {
  action: ActionType.GotoFrame;
  frame: Uint16;
}

export const $GotoFrame: DocumentIoType<GotoFrame> = new DocumentType<GotoFrame>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.GotoFrame as ActionType.GotoFrame})},
    frame: {type: $Uint16},
  },
  changeCase: CaseStyle.SnakeCase,
});
