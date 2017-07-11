import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface TargetPath extends ActionBase {
  action: ActionType.TargetPath;
}

export namespace TargetPath {
  export interface Json {
    action: "target-path";
  }

  export const type: DocumentType<TargetPath> = new DocumentType<TargetPath>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.TargetPath})},
    },
    rename: CaseStyle.KebabCase,
  });
}
