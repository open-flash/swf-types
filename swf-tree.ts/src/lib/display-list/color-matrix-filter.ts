import {ArrayType, CaseStyle, DocumentType, Float64Type, LiteralType} from "kryo";
import {FilterId} from "./filter-id";
import {Float32} from "semantic-types";

export interface ColorMatrixFilter {
  filterId: FilterId.ColorMatrix;
  matrix: Float32[];
}

export namespace ColorMatrixFilter {
  export interface Json {
    "filter-id": "color-matrix";
    matrix: number[];
  }

  export const type: DocumentType<ColorMatrixFilter> = new DocumentType<ColorMatrixFilter>({
    properties: {
      filterId: {type: new LiteralType({type: FilterId.type, value: FilterId.ColorMatrix})},
      matrix: {type: new ArrayType({itemType: new Float64Type(), /* minLength: 20, */ maxLength: 20})},
    },
    rename: CaseStyle.KebabCase,
  });
}
