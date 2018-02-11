import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Fixed8P8 } from "../fixed-point/fixed8p8";
import { $Gradient, Gradient } from "../gradient";
import { $Matrix, Matrix } from "../matrix";
import { $FillStyleType, FillStyleType } from "./_type";

export interface FocalGradient {
  type: FillStyleType.FocalGradient;
  matrix: Matrix;
  gradient: Gradient;
  focalPoint: Fixed8P8;
}

export const $FocalGradient: DocumentIoType<FocalGradient> = new DocumentType<FocalGradient>({
  properties: {
    type: {
      type: new LiteralType({
        type: $FillStyleType,
        value: FillStyleType.FocalGradient as FillStyleType.FocalGradient,
      }),
    },
    matrix: {type: $Matrix},
    gradient: {type: $Gradient},
    focalPoint: {type: Fixed8P8},
  },
  changeCase: CaseStyle.SnakeCase,
});
