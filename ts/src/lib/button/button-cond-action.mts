import { CaseStyle } from "kryo";
import { $Bytes } from "kryo/bytes";
import { RecordIoType, RecordType } from "kryo/record";

import { $ButtonCond, ButtonCond } from "./button-cond.mjs";

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
