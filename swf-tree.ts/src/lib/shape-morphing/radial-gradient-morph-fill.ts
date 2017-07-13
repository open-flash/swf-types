import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {Matrix} from "../basic-types/matrix";
import {StraightSRgba} from "../basic-types/straight-s-rgba";
import {FillStyleType} from "../shapes/fill-style-type";
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
      startGradientMatrix: {type: StraightSRgba.type},
      endGradientMatrix: {type: StraightSRgba.type},
      gradient: {type: MorphGradient.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
