import { CaseStyle } from "kryo";
import { $Bytes } from "kryo/lib/bytes.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";

import { $ButtonCond, ButtonCond } from "./button-cond.js";

export interface ButtonCondAction {
  readonly conditions?: ButtonCond;
  readonly actions: Uint8Array;
}

export const $ButtonCondAction: RecordIoType<ButtonCondAction> = new RecordType<ButtonCondAction>({
  properties: {
    conditions: {type: $ButtonCond, optional: true},
    actions: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
});
