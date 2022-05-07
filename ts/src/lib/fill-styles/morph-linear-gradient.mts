import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/record";

import { $Matrix, Matrix } from "../matrix.mjs";
import { $MorphGradient, MorphGradient } from "../morph-gradient.mjs";
import { $LinearGradient, LinearGradient } from "./linear-gradient.mjs";

export interface MorphLinearGradient extends LinearGradient {
  morphMatrix: Matrix;
  gradient: MorphGradient;
}

export const $MorphLinearGradient: RecordIoType<MorphLinearGradient> = new RecordType<MorphLinearGradient>({
  properties: {
    type: $LinearGradient.properties.type,
    matrix: $LinearGradient.properties.matrix,
    morphMatrix: {type: $Matrix},
    gradient: {type: $MorphGradient},
  },
  changeCase: CaseStyle.SnakeCase,
});
