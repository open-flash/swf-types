import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { $Gradient, Gradient } from "../gradient.mjs";
import { $Matrix, Matrix } from "../matrix.mjs";
import { $FillStyleType, FillStyleType } from "./_type.mjs";

export interface RadialGradient {
  type: FillStyleType.RadialGradient;
  matrix: Matrix;
  gradient: Gradient;
}

export const $RadialGradient: RecordIoType<RadialGradient> = new RecordType<RadialGradient>({
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
