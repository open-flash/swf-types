import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {Matrix} from "../basic-types/matrix";
import {StraightSRgba} from "../basic-types/straight-s-rgba";
import {Gradient} from "../gradients/gradient";
import {FillStyleType} from "./fill-style-type";

export interface LinearGradientFill {
  fillStypeType: FillStyleType.LinearGradient;
  gradientMatrix: Matrix;
  gradient: Gradient;
}

export namespace LinearGradientFill {
  export interface Json {
    fill_style_type: "linear-gradient";
    gradient_matrix: Matrix.Json;
    gradient: Gradient.Json;
  }

  export const type: DocumentType<LinearGradientFill> = new DocumentType<LinearGradientFill>({
    properties: {
      fillStyleType: {type: new LiteralType({type: FillStyleType.type, value: FillStyleType.LinearGradient})},
      gradientMatrix: {type: StraightSRgba.type},
      gradient: {type: Gradient.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
