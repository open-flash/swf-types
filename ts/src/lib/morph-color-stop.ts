import { CaseStyle } from "kryo";
import { $Uint8 } from "kryo/lib/integer.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Uint8 } from "semantic-types";

import { $ColorStop, ColorStop } from "./color-stop.js";
import { $StraightSRgba8, StraightSRgba8 } from "./straight-s-rgba8.js";

export interface MorphColorStop extends ColorStop {
  morphRatio: Uint8;
  morphColor: StraightSRgba8;
}

export const $MorphColorStop: RecordIoType<MorphColorStop> = new RecordType<MorphColorStop>({
  properties: {
    ratio: $ColorStop.properties.ratio,
    morphRatio: {type: $Uint8},
    color: $ColorStop.properties.color,
    morphColor: {type: $StraightSRgba8},
  },
  changeCase: CaseStyle.SnakeCase,
});
