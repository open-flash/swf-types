import { CaseStyle, DocumentType, LiteralType } from "kryo";
import { ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface MbStringExtract extends ActionBase {
  action: ActionType.MbStringExtract;
}

export namespace MbStringExtract {
  export interface Json {
    action: "mb-string-extract";
  }

  export const type: DocumentType<MbStringExtract> = new DocumentType<MbStringExtract>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.MbStringExtract})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
