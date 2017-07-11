import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface RemoveSprite extends ActionBase {
  action: ActionType.RemoveSprite;
}

export namespace RemoveSprite {
  export interface Json {
    action: "remove-sprite";
  }

  export const type: DocumentType<RemoveSprite> = new DocumentType<RemoveSprite>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.RemoveSprite})},
    },
    rename: CaseStyle.KebabCase,
  });
}
