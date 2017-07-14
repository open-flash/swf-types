import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {Gradient} from "../../gradients/gradient";
import {Matrix} from "../../matrix";
import {StraightSRgba8} from "../../straight-s-rgba8";
import {FillStyleType} from "./_type";

export interface RadialGradient {
  type: FillStyleType.RadialGradient;
  gradientMatrix: Matrix;
  gradient: Gradient;
}

export namespace RadialGradient {
  export interface Json {
    type: "radial-gradient";
    gradient_matrix: Matrix.Json;
    gradient: Gradient.Json;
  }

  export const type: DocumentType<RadialGradient> = new DocumentType<RadialGradient>({
    properties: {
      type: {type: new LiteralType({type: FillStyleType.type, value: FillStyleType.RadialGradient})},
      gradientMatrix: {type: StraightSRgba8.type},
      gradient: {type: Gradient.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
