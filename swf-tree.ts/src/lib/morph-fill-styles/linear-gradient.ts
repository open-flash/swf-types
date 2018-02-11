import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $Matrix, Matrix } from "../matrix";
import { $MorphGradient, MorphGradient } from "../morph-gradient";
import { $MorphFillStyleType, MorphFillStyleType } from "./_type";

export interface LinearGradient {
  type: MorphFillStyleType.LinearGradient;
  startMatrix: Matrix;
  endMatrix: Matrix;
  gradient: MorphGradient;
}

export const $LinearGradient: DocumentIoType<LinearGradient> = new DocumentType<LinearGradient>({
  properties: {
    type: {
      type: new LiteralType({
        type: $MorphFillStyleType,
        value: MorphFillStyleType.LinearGradient as MorphFillStyleType.LinearGradient,
      }),
    },
    startMatrix: {type: $Matrix},
    endMatrix: {type: $Matrix},
    gradient: {type: $MorphGradient},
  },
  changeCase: CaseStyle.SnakeCase,
});
