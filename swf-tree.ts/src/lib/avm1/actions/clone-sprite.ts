import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface CloneSprite extends ActionBase {
  action: ActionType.CloneSprite;
}

export const $CloneSprite: DocumentIoType<CloneSprite> = new DocumentType<CloneSprite>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.CloneSprite as ActionType.CloneSprite})},
  },
  changeCase: CaseStyle.SnakeCase,
});
