import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface Extends extends ActionBase {
  action: ActionType.Extends;
}

export namespace Extends {
  export interface Json {
    action: "extends";
  }

  export const type: DocumentType<Extends> = new DocumentType<Extends>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.Extends})},
    },
    rename: CaseStyle.KebabCase,
  });
}
