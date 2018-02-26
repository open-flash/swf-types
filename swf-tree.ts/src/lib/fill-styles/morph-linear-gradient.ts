import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { $Matrix, Matrix } from "../matrix";
import { $MorphGradient, MorphGradient } from "../morph-gradient";
import { $LinearGradient, LinearGradient } from "./linear-gradient";

export interface MorphLinearGradient extends LinearGradient {
  morphMatrix: Matrix;
  gradient: MorphGradient;
}

export const $MorphLinearGradient: DocumentIoType<MorphLinearGradient> = new DocumentType<MorphLinearGradient>({
  properties: {
    ...$LinearGradient.properties,
    morphMatrix: {type: $Matrix},
    gradient: {type: $MorphGradient},
  },
  changeCase: CaseStyle.SnakeCase,
});
