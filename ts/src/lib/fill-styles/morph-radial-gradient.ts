import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { $Matrix, Matrix } from "../matrix.js";
import { $MorphGradient, MorphGradient } from "../morph-gradient.js";
import { $RadialGradient, RadialGradient } from "./radial-gradient.js";

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
