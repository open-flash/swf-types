import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {Gradient} from "../../gradients/gradient";
import {Matrix} from "../../matrix";
import {StraightSRgba8} from "../../straight-s-rgba8";
import {FillStyleType} from "./_type";

export interface LinearGradient {
  type: FillStyleType.LinearGradient;
  gradientMatrix: Matrix;
  gradient: Gradient;
}

export namespace LinearGradient {
  export interface Json {
    type: "linear-gradient";
    gradient_matrix: Matrix.Json;
    gradient: Gradient.Json;
  }

  export const type: DocumentType<LinearGradient> = new DocumentType<LinearGradient>({
    properties: {
      type: {type: new LiteralType({type: FillStyleType.type, value: FillStyleType.LinearGradient})},
      gradientMatrix: {type: StraightSRgba8.type},
      gradient: {type: Gradient.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
