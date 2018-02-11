import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Fixed8P8 } from "../fixed-point/fixed8p8";
import { $Matrix, Matrix } from "../matrix";
import { $MorphGradient, MorphGradient } from "../morph-gradient";
import { $MorphFillStyleType, MorphFillStyleType } from "./_type";

export interface FocalGradient {
  type: MorphFillStyleType.FocalGradient;
  startMatrix: Matrix;
  endMatrix: Matrix;
  gradient: MorphGradient;
  startFocalPoint: Fixed8P8;
  endFocalPoint: Fixed8P8;
}

export const $FocalGradient: DocumentIoType<FocalGradient> = new DocumentType<FocalGradient>({
  properties: {
    type: {
      type: new LiteralType({
        type: $MorphFillStyleType,
        value: MorphFillStyleType.FocalGradient as MorphFillStyleType.FocalGradient,
      }),
    },
    startMatrix: {type: $Matrix},
    endMatrix: {type: $Matrix},
    gradient: {type: $MorphGradient},
    startFocalPoint: {type: Fixed8P8},
    endFocalPoint: {type: Fixed8P8},
  },
  changeCase: CaseStyle.SnakeCase,
});
