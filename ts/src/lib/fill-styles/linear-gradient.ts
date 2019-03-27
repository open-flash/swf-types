import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $Gradient, Gradient } from "../gradient";
import { $Matrix, Matrix } from "../matrix";
import { $FillStyleType, FillStyleType } from "./_type";

export interface LinearGradient {
  type: FillStyleType.LinearGradient;
  matrix: Matrix;
  gradient: Gradient;
}

export const $LinearGradient: DocumentIoType<LinearGradient> = new DocumentType<LinearGradient>({
  properties: {
    type: {
      type: new LiteralType({
        type: $FillStyleType,
        value: FillStyleType.LinearGradient as FillStyleType.LinearGradient,
      }),
    },
    matrix: {type: $Matrix},
    gradient: {type: $Gradient},
  },
  changeCase: CaseStyle.SnakeCase,
});
