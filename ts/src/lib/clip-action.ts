import { CaseStyle } from "kryo";
import { $Bytes } from "kryo/lib/bytes.js";
import { $Uint8 } from "kryo/lib/integer.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
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
