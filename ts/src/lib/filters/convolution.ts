import { $Boolean } from "kryo/lib/boolean.js";
import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/lib/array.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Float64Type } from "kryo/lib/float64.js";
import { IntegerType } from "kryo/lib/integer.js";
import { LiteralType } from "kryo/lib/literal.js";
import { Float32, UintSize } from "semantic-types";
import { $StraightSRgba8, StraightSRgba8 } from "../straight-s-rgba8.js";
import { $FilterType, FilterType } from "./_type.js";

export interface Convolution {
  filter: FilterType.Convolution;
  matrixWidth: UintSize;
  matrixHeight: UintSize;
  divisor: Float32;
  bias: Float32;
  matrix: Float32[];
  defaultColor: StraightSRgba8;
  clamp: boolean;
  preserveAlpha: boolean;
}

export const $Convolution: RecordIoType<Convolution> = new RecordType<Convolution>({
  properties: {
    filter: {type: new LiteralType({type: $FilterType, value: FilterType.Convolution as FilterType.Convolution})},
    matrixWidth: {type: new IntegerType()},
    matrixHeight: {type: new IntegerType()},
    divisor: {type: new Float64Type()},
    bias: {type: new Float64Type()},
    matrix: {type: new ArrayType({itemType: new Float64Type(), /* minLength: 20, */ maxLength: 20})},
    defaultColor: {type: $StraightSRgba8},
    clamp: {type: $Boolean},
    preserveAlpha: {type: $Boolean},
  },
  changeCase: CaseStyle.SnakeCase,
});
