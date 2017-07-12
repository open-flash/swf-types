import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface StopSounds extends ActionBase {
  action: ActionType.StopSounds;
}

export namespace StopSounds {
  export interface Json {
    action: "stop-sounds";
  }

  export const type: DocumentType<StopSounds> = new DocumentType<StopSounds>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.StopSounds})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
