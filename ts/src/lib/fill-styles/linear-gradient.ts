import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { $Gradient, Gradient } from "../gradient.js";
import { $Matrix, Matrix } from "../matrix.js";
import { $FillStyleType, FillStyleType } from "./_type.js";

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
