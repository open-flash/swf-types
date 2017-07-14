import {ArrayType, CaseStyle, DocumentType, Float64Type, LiteralType} from "kryo";
import {Float32} from "semantic-types";
import {FilterType} from "./_type";

export interface ColorMatrix {
  filter: FilterType.ColorMatrix;
  matrix: Float32[];
}

export namespace ColorMatrix {
  export interface Json {
    filter: "color-matrix";
    matrix: number[];
  }

  export const type: DocumentType<ColorMatrix> = new DocumentType<ColorMatrix>({
    properties: {
      filter: {type: new LiteralType({type: FilterType.type, value: FilterType.ColorMatrix})},
      matrix: {type: new ArrayType({itemType: new Float64Type(), /* minLength: 20, */ maxLength: 20})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
