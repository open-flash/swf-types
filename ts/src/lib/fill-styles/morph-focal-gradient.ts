import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/record";

import { Sfixed8P8 } from "../fixed-point/sfixed8p8.js";
import { $Matrix, Matrix } from "../matrix.js";
import { $MorphGradient, MorphGradient } from "../morph-gradient.js";
import { $FocalGradient, FocalGradient } from "./focal-gradient.js";

export interface MorphFocalGradient extends FocalGradient {
  morphMatrix: Matrix;
  gradient: MorphGradient;
  morphFocalPoint: Sfixed8P8;
}

export const $MorphFocalGradient: RecordIoType<MorphFocalGradient> = new RecordType<MorphFocalGradient>({
  properties: {
    type: $FocalGradient.properties.type,
    matrix: $FocalGradient.properties.matrix,
    morphMatrix: {type: $Matrix},
    gradient: {type: $MorphGradient},
    focalPoint: $FocalGradient.properties.focalPoint,
    morphFocalPoint: {type: Sfixed8P8},
  },
  changeCase: CaseStyle.SnakeCase,
});
