import { CaseStyle } from "kryo";
import { $Bytes } from "kryo/bytes";
import { $Uint8 } from "kryo/integer";
import { RecordIoType, RecordType } from "kryo/record";
import { Uint8 } from "semantic-types";

import { $ClipEventFlags, ClipEventFlags } from "./clip-event-flags.js";

export interface ClipAction {
  events: ClipEventFlags;
  keyCode?: Uint8;
  actions: Uint8Array;
}

export const $ClipAction: RecordIoType<ClipAction> = new RecordType<ClipAction>({
  properties: {
    events: {type: $ClipEventFlags},
    keyCode: {type: $Uint8, optional: true},
    actions: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
});
