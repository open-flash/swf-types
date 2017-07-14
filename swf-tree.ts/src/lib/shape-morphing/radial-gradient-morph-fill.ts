import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {Matrix} from "../matrix";
import {FillStyleType} from "../shapes/fills/_type";
import {StraightSRgba8} from "../straight-s-rgba8";
import {MorphGradient} from "./morph-gradient";

export interface RadialGradientMorphFill {
  fillStypeType: FillStyleType.RadialGradient;
  startGradientMatrix: Matrix;
  endGradientMatrix: Matrix;
  gradient: MorphGradient;
}

export namespace RadialGradientMorphFill {
  export interface Json {
    fill_style_type: "radial-gradient";
    start_gradient_matrix: Matrix.Json;
    end_gradient_matrix: Matrix.Json;
    gradient: MorphGradient.Json;
  }

  export const type: DocumentType<RadialGradientMorphFill> = new DocumentType<RadialGradientMorphFill>({
    properties: {
      fillStyleType: {type: new LiteralType({type: FillStyleType.type, value: FillStyleType.RadialGradient})},
      startGradientMatrix: {type: StraightSRgba8.type},
      endGradientMatrix: {type: StraightSRgba8.type},
      gradient: {type: MorphGradient.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
