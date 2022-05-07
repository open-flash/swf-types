import { CaseStyle } from "kryo";
import { $Uint8 } from "kryo/integer";
import { RecordIoType, RecordType } from "kryo/record";
import { Uint8 } from "semantic-types";

import { $ColorStop, ColorStop } from "./color-stop.mjs";
import { $StraightSRgba8, StraightSRgba8 } from "./straight-s-rgba8.mjs";

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
