import {CaseStyle, DocumentType, Int32Type} from "kryo";
import {Uint8} from "semantic-types";
import {Action} from "../avm1/action";
import {ClipEventFlags} from "./clip-event-flags";

export interface ClipAction {
  eventFlags: ClipEventFlags;
  keyCode?: Uint8;
  actions: Action[];
}

export namespace ClipAction {
  export interface Json {
    "event-flags": ClipEventFlags.Json;
    "key-code"?: number;
    "actions": Action.Json;
  }

  export const type: DocumentType<ClipAction> = new DocumentType<ClipAction>({
    properties: {
      eventFlags: {type: ClipEventFlags.type},
      keyCode: {type: new Int32Type()},
      actions: {type: Action.type},
    },
    rename: CaseStyle.KebabCase,
  });
}
