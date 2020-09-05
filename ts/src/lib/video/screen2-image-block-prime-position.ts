import { $Uint8 } from "kryo/lib/integer.js";
import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Uint8 } from "semantic-types";

export interface Screen2ImageBlockPrimePosition {
  column: Uint8;
  row: Uint8;
}

// tslint:disable-next-line:max-line-length
export const $Screen2ImageBlockPrimePosition: RecordIoType<Screen2ImageBlockPrimePosition> = new RecordType<Screen2ImageBlockPrimePosition>({
  properties: {
    column: {type: $Uint8},
    row: {type: $Uint8},
  },
  changeCase: CaseStyle.SnakeCase,
});
