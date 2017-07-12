import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface FsCommand2 extends ActionBase {
  action: ActionType.FsCommand2;
}

export namespace FsCommand2 {
  export interface Json {
    action: "fs-command2";
  }

  export const type: DocumentType<FsCommand2> = new DocumentType<FsCommand2>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.FsCommand2})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
