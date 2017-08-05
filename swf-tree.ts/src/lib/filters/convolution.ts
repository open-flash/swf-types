import {ArrayType, BooleanType, CaseStyle, DocumentType, Float64Type, Int32Type, LiteralType} from "kryo";
import {Float32, UintSize} from "semantic-types";
import {StraightSRgba8} from "../straight-s-rgba8";
import {FilterType} from "./_type";

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

export namespace Convolution {
  export interface Json {
    filter: "convolution";
    matrix_width: number;
    matrixHeight: number;
    divisor: number;
    bias: number;
    matrix: number[];
    default_color: StraightSRgba8.Json;
    clamp: boolean;
    preserve_alpha: boolean;
  }

  export const type: DocumentType<Convolution> = new DocumentType<Convolution>({
    properties: {
      filter: {type: new LiteralType({type: FilterType.type, value: FilterType.Convolution})},
      matrixWidth: {type: new Int32Type()},
      matrixHeight: {type: new Int32Type()},
      divisor: {type: new Float64Type()},
      bias: {type: new Float64Type()},
      matrix: {type: new ArrayType({itemType: new Float64Type(), /* minLength: 20, */ maxLength: 20})},
      defaultColor: {type: StraightSRgba8.type},
      clamp: {type: new BooleanType()},
      preserveAlpha: {type: new BooleanType()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
