import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";

import { $Gradient, Gradient } from "../gradient.js";
import { $Matrix, Matrix } from "../matrix.js";
import { $FillStyleType, FillStyleType } from "./_type.js";

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
