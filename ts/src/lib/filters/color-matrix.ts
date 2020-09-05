import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/lib/array.js";
import { Float64Type } from "kryo/lib/float64.js";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
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
