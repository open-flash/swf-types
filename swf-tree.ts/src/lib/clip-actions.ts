import {ArrayType, CaseStyle, DocumentType, Int32Type} from "kryo";
import {Uint8} from "semantic-types";
import {Action as $Action} from "./_circular-references";
import {Action} from "./avm1/action";
import {ClipEventFlags} from "./clip-event-flags";

export interface ClipActions {
  events: ClipEventFlags;
  keyCode?: Uint8;
  actions: Action[];
}

export namespace ClipActions {
  export interface Json {
    events: ClipEventFlags.Json;
    key_code?: number;
    records: Action.Json[];
  }

  export const type: DocumentType<ClipActions> = new DocumentType<ClipActions>({
    properties: {
      events: {type: new ArrayType({itemType: $Action.type, maxLength: Infinity})},
      keyCode: {type: new Int32Type(), optional: true},
      actions: {type: new ArrayType({itemType: $Action.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
