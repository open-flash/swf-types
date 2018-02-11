import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface FsCommand2 extends ActionBase {
  action: ActionType.FsCommand2;
}

export const $FsCommand2: DocumentIoType<FsCommand2> = new DocumentType<FsCommand2>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.FsCommand2 as ActionType.FsCommand2})},
  },
  changeCase: CaseStyle.SnakeCase,
});
