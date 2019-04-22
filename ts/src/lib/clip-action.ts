import { $Bytes } from "kryo/builtins/bytes";
import { $Uint8 } from "kryo/builtins/uint8";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Uint8 } from "semantic-types";
import { $ClipEventFlags, ClipEventFlags } from "./clip-event-flags";

export interface ClipAction {
  events: ClipEventFlags;
  keyCode?: Uint8;
  actions: Uint8Array;
}

export const $ClipAction: DocumentIoType<ClipAction> = new DocumentType<ClipAction>({
  properties: {
    events: {type: $ClipEventFlags},
    keyCode: {type: $Uint8, optional: true},
    actions: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
});
