import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface TargetPath extends ActionBase {
  action: ActionType.TargetPath;
}

export const $TargetPath: DocumentIoType<TargetPath> = new DocumentType<TargetPath>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.TargetPath as ActionType.TargetPath})},
  },
  changeCase: CaseStyle.SnakeCase,
});
