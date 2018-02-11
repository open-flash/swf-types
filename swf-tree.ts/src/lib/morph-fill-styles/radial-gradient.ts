import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $Matrix, Matrix } from "../matrix";
import { $MorphGradient, MorphGradient } from "../morph-gradient";
import { $MorphFillStyleType, MorphFillStyleType } from "./_type";

export interface RadialGradient {
  type: MorphFillStyleType.RadialGradient;
  startMatrix: Matrix;
  endMatrix: Matrix;
  gradient: MorphGradient;
}

export const $RadialGradient: DocumentIoType<RadialGradient> = new DocumentType<RadialGradient>({
  properties: {
    type: {
      type: new LiteralType({
        type: $MorphFillStyleType,
        value: MorphFillStyleType.RadialGradient as MorphFillStyleType.RadialGradient,
      }),
    },
    startMatrix: {type: $Matrix},
    endMatrix: {type: $Matrix},
    gradient: {type: $MorphGradient},
  },
  changeCase: CaseStyle.SnakeCase,
});
