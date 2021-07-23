import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/array";
import { Float64Type } from "kryo/float64";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Float32 } from "semantic-types";

import { $FilterType, FilterType } from "./_type.js";

export interface ColorMatrix {
  filter: FilterType.ColorMatrix;
  matrix: Float32[];
}

export const $ColorMatrix: RecordIoType<ColorMatrix> = new RecordType<ColorMatrix>({
  properties: {
    filter: {type: new LiteralType({type: $FilterType, value: FilterType.ColorMatrix as FilterType.ColorMatrix})},
    matrix: {type: new ArrayType({itemType: new Float64Type(), /* minLength: 20, */ maxLength: 20})},
  },
  changeCase: CaseStyle.SnakeCase,
});
