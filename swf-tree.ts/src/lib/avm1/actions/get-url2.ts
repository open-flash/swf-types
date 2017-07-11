import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface GetUrl2 extends ActionBase {
  action: ActionType.GetUrl2;
}

export namespace GetUrl2 {
  export interface Json {
    action: "get-url2";
  }

  export const type: DocumentType<GetUrl2> = new DocumentType<GetUrl2>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.GetUrl2})},
    },
    rename: CaseStyle.KebabCase,
  });
}
