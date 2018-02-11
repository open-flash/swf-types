import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface ToggleQuality extends ActionBase {
  action: ActionType.ToggleQuality;
}

export const $ToggleQuality: DocumentIoType<ToggleQuality> = new DocumentType<ToggleQuality>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.ToggleQuality as ActionType.ToggleQuality})},
  },
  changeCase: CaseStyle.SnakeCase,
});
