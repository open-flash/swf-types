import { CaseStyle } from "kryo";
import { $Sint16 } from "kryo/integer";
import { RecordIoType, RecordType } from "kryo/record";
import { Sint16 } from "semantic-types";

import { $ColorTransform, ColorTransform } from "./color-transform.js";
import { Sfixed8P8 } from "./fixed-point/sfixed8p8.js";

export interface ColorTransformWithAlpha extends ColorTransform {
  alphaMult: Sfixed8P8;
  alphaAdd: Sint16;
}

// tslint:disable-next-line:max-line-length
export const $ColorTransformWithAlpha: RecordIoType<ColorTransformWithAlpha> = new RecordType<ColorTransformWithAlpha>({
  properties: {
    redMult: $ColorTransform.properties.redMult,
    greenMult: $ColorTransform.properties.greenMult,
    blueMult: $ColorTransform.properties.blueMult,
    alphaMult: {type: Sfixed8P8},
    redAdd: $ColorTransform.properties.redAdd,
    greenAdd: $ColorTransform.properties.greenAdd,
    blueAdd: $ColorTransform.properties.blueAdd,
    alphaAdd: {type: $Sint16},
  },
  changeCase: CaseStyle.SnakeCase,
});
