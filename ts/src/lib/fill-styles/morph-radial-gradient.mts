import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/record";

import { $Matrix, Matrix } from "../matrix.mjs";
import { $MorphGradient, MorphGradient } from "../morph-gradient.mjs";
import { $RadialGradient, RadialGradient } from "./radial-gradient.mjs";

export interface MorphRadialGradient extends RadialGradient {
  morphMatrix: Matrix;
  gradient: MorphGradient;
}

export const $MorphRadialGradient: RecordIoType<MorphRadialGradient> = new RecordType<MorphRadialGradient>({
  properties: {
    type: $RadialGradient.properties.type,
    matrix: $RadialGradient.properties.matrix,
    morphMatrix: {type: $Matrix},
    gradient: {type: $MorphGradient},
  },
  changeCase: CaseStyle.SnakeCase,
});
