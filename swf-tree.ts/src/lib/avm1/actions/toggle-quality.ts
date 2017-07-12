import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface ToggleQuality extends ActionBase {
  action: ActionType.ToggleQuality;
}

export namespace ToggleQuality {
  export interface Json {
    action: "toggle-quality";
  }

  export const type: DocumentType<ToggleQuality> = new DocumentType<ToggleQuality>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.ToggleQuality})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
