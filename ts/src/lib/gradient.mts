import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/array";
import { RecordIoType, RecordType } from "kryo/record";

import { $ColorSpace, ColorSpace } from "./color-space.mjs";
import { $ColorStop, ColorStop } from "./color-stop.mjs";
import { $GradientSpread, GradientSpread } from "./gradient-spread.mjs";

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
