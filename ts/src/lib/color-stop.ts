import { CaseStyle } from "kryo";
import { $Uint8 } from "kryo/integer";
import { RecordIoType, RecordType } from "kryo/record";
import { Uint8 } from "semantic-types";

import { $StraightSRgba8, StraightSRgba8 } from "./straight-s-rgba8.js";

export interface ColorStop {
  ratio: Uint8;
  color: StraightSRgba8;
}

export const $ColorStop: RecordIoType<ColorStop> = new RecordType<ColorStop>({
  properties: {
    ratio: {type: $Uint8},
    color: {type: $StraightSRgba8},
  },
  changeCase: CaseStyle.SnakeCase,
});
