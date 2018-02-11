import { $Boolean } from "kryo/builtins/boolean";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { $GetUrl2Method, GetUrl2Method } from "../get-url2-method";
import { ActionBase } from "./_base";

export interface GetUrl2 extends ActionBase {
  action: ActionType.GetUrl2;
  method: GetUrl2Method;
  loadTarget: boolean;
  loadVariables: boolean;
}

export const $GetUrl2: DocumentIoType<GetUrl2> = new DocumentType<GetUrl2>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.GetUrl2 as ActionType.GetUrl2})},
    method: {type: $GetUrl2Method},
    loadTarget: {type: $Boolean},
    loadVariables: {type: $Boolean},
  },
  changeCase: CaseStyle.SnakeCase,
});
