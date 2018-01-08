import { BooleanType, CaseStyle, DocumentType, LiteralType } from "kryo";
import { ActionType } from "../action-type";
import { GetUrl2Method } from "../get-url2-method";
import { ActionBase } from "./_base";

export interface GetUrl2 extends ActionBase {
  action: ActionType.GetUrl2;
  method: GetUrl2Method;
  loadTarget: boolean;
  loadVariables: boolean;
}

export namespace GetUrl2 {
  export interface Json {
    action: "get-url2";
    method: GetUrl2Method.Json;
    load_target: boolean;
    load_variables: boolean;
  }

  export const type: DocumentType<GetUrl2> = new DocumentType<GetUrl2>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.GetUrl2})},
      method: {type: GetUrl2Method.type},
      loadTarget: {type: new BooleanType()},
      loadVariables: {type: new BooleanType()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
