import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {Matrix} from "../basic-types/matrix";
import {Rgba} from "../basic-types/rgba";
import {Gradient} from "../gradients/gradient";
import {FillStyleType} from "./fill-style-type";

export interface RadialGradientFill {
  fillStypeType: FillStyleType.RadialGradient;
  gradientMatrix: Matrix;
  gradient: Gradient;
}

export namespace RadialGradientFill {
  export interface Json {
    fill_style_type: "radial-gradient";
    gradient_matrix: Matrix.Json;
    gradient: Gradient.Json;
  }

  export const type: DocumentType<RadialGradientFill> = new DocumentType<RadialGradientFill>({
    properties: {
      fillStyleType: {type: new LiteralType({type: FillStyleType.type, value: FillStyleType.RadialGradient})},
      gradientMatrix: {type: Rgba.type},
      gradient: {type: Gradient.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
