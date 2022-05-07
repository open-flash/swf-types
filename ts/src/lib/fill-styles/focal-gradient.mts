import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { Sfixed8P8 } from "../fixed-point/sfixed8p8.mjs";
import { $Gradient, Gradient } from "../gradient.mjs";
import { $Matrix, Matrix } from "../matrix.mjs";
import { $FillStyleType, FillStyleType } from "./_type.mjs";

export interface FocalGradient {
  type: FillStyleType.FocalGradient;
  matrix: Matrix;
  gradient: Gradient;
  focalPoint: Sfixed8P8;
}

export const $FocalGradient: RecordIoType<FocalGradient> = new RecordType<FocalGradient>({
  properties: {
    type: {
      type: new LiteralType({
        type: $FillStyleType,
        value: FillStyleType.FocalGradient as FillStyleType.FocalGradient,
      }),
    },
    matrix: {type: $Matrix},
    gradient: {type: $Gradient},
    focalPoint: {type: Sfixed8P8},
  },
  changeCase: CaseStyle.SnakeCase,
});
