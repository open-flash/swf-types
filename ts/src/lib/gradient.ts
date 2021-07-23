import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/array";
import { RecordIoType, RecordType } from "kryo/record";

import { $ColorSpace, ColorSpace } from "./color-space.js";
import { $ColorStop, ColorStop } from "./color-stop.js";
import { $GradientSpread, GradientSpread } from "./gradient-spread.js";

export interface Gradient {
  spread: GradientSpread;
  colorSpace: ColorSpace;
  colors: ColorStop[];
}

export const $Gradient: RecordIoType<Gradient> = new RecordType<Gradient>({
  properties: {
    spread: {type: $GradientSpread},
    colorSpace: {type: $ColorSpace},
    colors: {type: new ArrayType({itemType: $ColorStop, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
