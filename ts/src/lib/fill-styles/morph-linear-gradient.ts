import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { $Matrix, Matrix } from "../matrix.js";
import { $MorphGradient, MorphGradient } from "../morph-gradient.js";
import { $LinearGradient, LinearGradient } from "./linear-gradient.js";

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
