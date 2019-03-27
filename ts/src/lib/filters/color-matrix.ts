import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Float64Type } from "kryo/types/float64";
import { LiteralType } from "kryo/types/literal";
import { Float32 } from "semantic-types";
import { $FilterType, FilterType } from "./_type";

export interface ColorMatrix {
  filter: FilterType.ColorMatrix;
  matrix: Float32[];
}

export const $ColorMatrix: DocumentIoType<ColorMatrix> = new DocumentType<ColorMatrix>({
  properties: {
    filter: {type: new LiteralType({type: $FilterType, value: FilterType.ColorMatrix as FilterType.ColorMatrix})},
    matrix: {type: new ArrayType({itemType: new Float64Type(), /* minLength: 20, */ maxLength: 20})},
  },
  changeCase: CaseStyle.SnakeCase,
});
