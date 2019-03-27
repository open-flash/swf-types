import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $Gradient, Gradient } from "../gradient";
import { $Matrix, Matrix } from "../matrix";
import { $FillStyleType, FillStyleType } from "./_type";

export interface RadialGradient {
  type: FillStyleType.RadialGradient;
  matrix: Matrix;
  gradient: Gradient;
}

export const $RadialGradient: DocumentIoType<RadialGradient> = new DocumentType<RadialGradient>({
  properties: {
    type: {
      type: new LiteralType({
        type: $FillStyleType,
        value: FillStyleType.RadialGradient as FillStyleType.RadialGradient,
      }),
    },
    matrix: {type: $Matrix},
    gradient: {type: $Gradient},
  },
  changeCase: CaseStyle.SnakeCase,
});
