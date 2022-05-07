import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { $Gradient, Gradient } from "../gradient.mjs";
import { $Matrix, Matrix } from "../matrix.mjs";
import { $FillStyleType, FillStyleType } from "./_type.mjs";

export interface LinearGradient {
  type: FillStyleType.LinearGradient;
  matrix: Matrix;
  gradient: Gradient;
}

export const $LinearGradient: RecordIoType<LinearGradient> = new RecordType<LinearGradient>({
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
