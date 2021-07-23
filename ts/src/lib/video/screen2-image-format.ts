import { CaseStyle } from "kryo";
import { $Boolean } from "kryo/boolean";
import { RecordIoType, RecordType } from "kryo/record";

import { $Screen2ColorDepth, Screen2ColorDepth } from "./screen2-color-depth.js";

export interface Screen2ImageFormat {
  colorDepth: Screen2ColorDepth;
  hasDiffBlocks: boolean;
  zlibPrimeCompressCurrent: boolean;
  zlibPrimeCompressPrevious: boolean;
}

export const $Screen2ImageFormat: RecordIoType<Screen2ImageFormat> = new RecordType<Screen2ImageFormat>({
  properties: {
    colorDepth: {type: $Screen2ColorDepth},
    hasDiffBlocks: {type: $Boolean},
    zlibPrimeCompressCurrent: {type: $Boolean},
    zlibPrimeCompressPrevious: {type: $Boolean},
  },
  changeCase: CaseStyle.SnakeCase,
});
