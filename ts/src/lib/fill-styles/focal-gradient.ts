import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { Sfixed8P8 } from "../fixed-point/sfixed8p8.js";
import { $Gradient, Gradient } from "../gradient.js";
import { $Matrix, Matrix } from "../matrix.js";
import { $FillStyleType, FillStyleType } from "./_type.js";

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
