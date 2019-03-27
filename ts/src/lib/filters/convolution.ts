import { $Boolean } from "kryo/builtins/boolean";
import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Float64Type } from "kryo/types/float64";
import { IntegerType } from "kryo/types/integer";
import { LiteralType } from "kryo/types/literal";
import { Float32, UintSize } from "semantic-types";
import { $StraightSRgba8, StraightSRgba8 } from "../straight-s-rgba8";
import { $FilterType, FilterType } from "./_type";

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

export const $Convolution: DocumentIoType<Convolution> = new DocumentType<Convolution>({
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
