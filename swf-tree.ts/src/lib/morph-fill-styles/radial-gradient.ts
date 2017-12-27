import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {Matrix} from "../matrix";
import {MorphGradient} from "../morph-gradient";
import {StraightSRgba8} from "../straight-s-rgba8";
import {MorphFillStyleType} from "./_type";

export interface RadialGradient {
  type: MorphFillStyleType.RadialGradient;
  startMatrix: Matrix;
  endMatrix: Matrix;
  gradient: MorphGradient;
}

export namespace RadialGradient {
  export interface Json {
    type: "radial-gradient";
    start_matrix: Matrix.Json;
    end_matrix: Matrix.Json;
    gradient: MorphGradient.Json;
  }

  export const type: DocumentType<RadialGradient> = new DocumentType<RadialGradient>({
    properties: {
      type: {type: new LiteralType({type: MorphFillStyleType.type, value: MorphFillStyleType.RadialGradient})},
      startMatrix: {type: StraightSRgba8.type},
      endMatrix: {type: StraightSRgba8.type},
      gradient: {type: MorphGradient.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
