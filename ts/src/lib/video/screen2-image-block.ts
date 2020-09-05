import { CaseStyle } from "kryo";
import { $Any } from "kryo/lib/any.js";
import { $Bytes } from "kryo/lib/bytes.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";

import { Screen2ImageBlockDiffPosition } from "./screen2-image-block-diff-position.js";
import { Screen2ImageBlockPrimePosition } from "./screen2-image-block-prime-position.js";
import { $Screen2ImageFormat, Screen2ImageFormat } from "./screen2-image-format.js";

export interface Screen2ImageBlock {
  format: Screen2ImageFormat;
  header?: Screen2ImageBlockDiffPosition | Screen2ImageBlockPrimePosition;
  data?: Uint8Array;
}

export const $Screen2ImageBlock: RecordIoType<Screen2ImageBlock> = new RecordType<Screen2ImageBlock>({
  properties: {
    format: {type: $Screen2ImageFormat},
    header: {type: $Any, optional: true},
    data: {type: $Bytes, optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
});
