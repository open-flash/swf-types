import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/lib/array.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { $Gradient, Gradient } from "./gradient.js";
import { $MorphColorStop, MorphColorStop } from "./morph-color-stop.js";

export interface MorphGradient extends Gradient {
  colors: MorphColorStop[];
}

export const $MorphGradient: RecordIoType<MorphGradient> = new RecordType<MorphGradient>({
  properties: {
    spread: $Gradient.properties.spread,
    colorSpace: $Gradient.properties.colorSpace,
    colors: {type: new ArrayType({itemType: $MorphColorStop, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
