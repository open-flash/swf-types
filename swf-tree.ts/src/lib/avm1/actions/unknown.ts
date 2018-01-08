import { CaseStyle, DocumentType, IntegerType, LiteralType } from "kryo";
import { Uint8 } from "semantic-types";
import { ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface Unknown extends ActionBase {
  action: ActionType.Unknown;
  actionCode: Uint8;
}

export namespace Unknown {
  export interface Json {
    action: "unknown";
    action_code: number;
  }

  export const type: DocumentType<Unknown> = new DocumentType<Unknown>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.Unknown})},
      actionCode: {type: new IntegerType()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
