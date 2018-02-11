import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Ucs2StringType } from "kryo/types/ucs2-string";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface GetUrl extends ActionBase {
  action: ActionType.GetUrl;
  url: string;
  target: string;
}

export const $GetUrl: DocumentIoType<GetUrl> = new DocumentType<GetUrl>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.GetUrl as ActionType.GetUrl})},
    url: {type: new Ucs2StringType({maxLength: Infinity})},
    target: {type: new Ucs2StringType({maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
