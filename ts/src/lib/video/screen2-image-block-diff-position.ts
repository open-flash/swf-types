import { $Uint8 } from "kryo/lib/integer.js";
import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Uint8 } from "semantic-types";

export interface Screen2ImageBlockDiffPosition {
  rowStart: Uint8;
  height: Uint8;
}

// tslint:disable-next-line:max-line-length
export const $Screen2ImageBlockDiffPosition: RecordIoType<Screen2ImageBlockDiffPosition> = new RecordType<Screen2ImageBlockDiffPosition>({
  properties: {
    rowStart: {type: $Uint8},
    height: {type: $Uint8},
  },
  changeCase: CaseStyle.SnakeCase,
});
