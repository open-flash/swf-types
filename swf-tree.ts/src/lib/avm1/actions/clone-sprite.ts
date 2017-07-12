import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface CloneSprite extends ActionBase {
  action: ActionType.CloneSprite;
}

export namespace CloneSprite {
  export interface Json {
    action: "clone-sprite";
  }

  export const type: DocumentType<CloneSprite> = new DocumentType<CloneSprite>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.CloneSprite})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
