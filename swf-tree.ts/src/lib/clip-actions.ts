import { $Uint8 } from "kryo/builtins/uint8";
import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Uint8 } from "semantic-types";
import { $Action } from "./avm1";
import { Action } from "./avm1/action";
import { $ClipEventFlags, ClipEventFlags } from "./clip-event-flags";

export interface ClipActions {
  events: ClipEventFlags;
  keyCode?: Uint8;
  actions: Action[];
}

export const $ClipActions: DocumentIoType<ClipActions> = new DocumentType<ClipActions>({
  properties: {
    events: {type: $ClipEventFlags},
    keyCode: {type: $Uint8, optional: true},
    actions: {type: new ArrayType({itemType: $Action, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
