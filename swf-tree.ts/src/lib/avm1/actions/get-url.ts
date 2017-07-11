import {CaseStyle, DocumentType, LiteralType, Ucs2StringType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface GetUrl extends ActionBase {
  action: ActionType.GetUrl;
  url: string;
  target: string;
}

export namespace GetUrl {
  export interface Json {
    action: "get-url";
    url: string;
    target: string;
  }

  export const type: DocumentType<GetUrl> = new DocumentType<GetUrl>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.GetUrl})},
      url: {type: new Ucs2StringType({maxLength: Infinity})},
      target: {type: new Ucs2StringType({maxLength: Infinity})},
    },
    rename: CaseStyle.KebabCase,
  });
}
