import {ArrayType, BooleanType, CaseStyle, DocumentType, Float64Type, Int32Type, LiteralType} from "kryo";
import {Float32, Uint8} from "semantic-types";
import {Rgba} from "../basic-types/rgba";
import {FilterId} from "./filter-id";

export interface ConvolutionFilter {
  filterId: FilterId.Convolution;
  matrixX: Uint8;
  matrixY: Uint8;
  divisor: Float32;
  bias: Float32;
  matrix: Float32[];
  defaultColor: Rgba;
  clamp: boolean;
  preserveAlpha: boolean;
}

export namespace ConvolutionFilter {
  export interface Json {
    "filter-id": "convolution";
    "matrix-x": number;
    "matrix-y": number;
    "divisor": number;
    "bias": number;
    "matrix": number[];
    "default-color": Rgba.Json;
    "clamp": boolean;
    "preserve-alpha": boolean;
  }

  export const type: DocumentType<ConvolutionFilter> = new DocumentType<ConvolutionFilter>({
    properties: {
      filterId: {type: new LiteralType({type: FilterId.type, value: FilterId.Convolution})},
      matrixX: {type: new Int32Type()},
      matrixY: {type: new Int32Type()},
      divisor: {type: new Float64Type()},
      bias: {type: new Float64Type()},
      matrix: {type: new ArrayType({itemType: new Float64Type(), /* minLength: 20, */ maxLength: 20})},
      defaultColor: {type: Rgba.type},
      clamp: {type: new BooleanType()},
      preserveAlpha: {type: new BooleanType()},
    },
    rename: CaseStyle.KebabCase,
  });
}
