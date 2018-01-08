import { CaseStyle, DocumentType, LiteralType } from "kryo";
import { ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface CastOp extends ActionBase {
  action: ActionType.CastOp;
}

export namespace CastOp {
  export interface Json {
    action: "cast-op";
  }

  export const type: DocumentType<CastOp> = new DocumentType<CastOp>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.CastOp})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
