import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { $Matrix, Matrix } from "../matrix";
import { $MorphGradient, MorphGradient } from "../morph-gradient";
import { $RadialGradient, RadialGradient } from "./radial-gradient";

export interface MorphRadialGradient extends RadialGradient {
  morphMatrix: Matrix;
  gradient: MorphGradient;
}

export const $MorphRadialGradient: DocumentIoType<MorphRadialGradient> = new DocumentType<MorphRadialGradient>({
  properties: {
    type: $RadialGradient.properties.type,
    matrix: $RadialGradient.properties.matrix,
    morphMatrix: {type: $Matrix},
    gradient: {type: $MorphGradient},
  },
  changeCase: CaseStyle.SnakeCase,
});
