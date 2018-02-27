import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Sfixed8P8 } from "../fixed-point/sfixed8p8";
import { $Matrix, Matrix } from "../matrix";
import { $MorphGradient, MorphGradient } from "../morph-gradient";
import { $FocalGradient, FocalGradient } from "./focal-gradient";

export interface MorphFocalGradient extends FocalGradient {
  morphMatrix: Matrix;
  gradient: MorphGradient;
  morphFocalPoint: Sfixed8P8;
}

export const $MorphFocalGradient: DocumentIoType<MorphFocalGradient> = new DocumentType<MorphFocalGradient>({
  properties: {
    ...$FocalGradient.properties,
    morphMatrix: {type: $Matrix},
    gradient: {type: $MorphGradient},
    morphFocalPoint: {type: Sfixed8P8},
  },
  changeCase: CaseStyle.SnakeCase,
});
