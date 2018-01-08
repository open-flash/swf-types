import { CaseStyle, DocumentType, LiteralType } from "kryo";
import { ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface InstanceOf extends ActionBase {
  action: ActionType.InstanceOf;
}

export namespace InstanceOf {
  export interface Json {
    action: "instance-of";
  }

  export const type: DocumentType<InstanceOf> = new DocumentType<InstanceOf>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.InstanceOf})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
