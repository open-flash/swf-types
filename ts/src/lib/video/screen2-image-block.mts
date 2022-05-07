import { CaseStyle } from "kryo";
import { $Any } from "kryo/any";
import { $Bytes } from "kryo/bytes";
import { RecordIoType, RecordType } from "kryo/record";

import { Screen2ImageBlockDiffPosition } from "./screen2-image-block-diff-position.mjs";
import { Screen2ImageBlockPrimePosition } from "./screen2-image-block-prime-position.mjs";
import { $Screen2ImageFormat, Screen2ImageFormat } from "./screen2-image-format.mjs";

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
