import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {Matrix} from "../basic-types/matrix";
import {Rgba} from "../basic-types/rgba";
import {FillStyleType} from "../shapes/fill-style-type";
import {MorphGradient} from "./morph-gradient";

export interface LinearGradientMorphFill {
  fillStypeType: FillStyleType.LinearGradient;
  startGradientMatrix: Matrix;
  endGradientMatrix: Matrix;
  gradient: MorphGradient;
}

export namespace LinearGradientMorphFill {
  export interface Json {
    fill_style_type: "linear-gradient";
    start_gradient_matrix: Matrix.Json;
    end_gradient_matrix: Matrix.Json;
    gradient: MorphGradient.Json;
  }

  export const type: DocumentType<LinearGradientMorphFill> = new DocumentType<LinearGradientMorphFill>({
    properties: {
      fillStyleType: {type: new LiteralType({type: FillStyleType.type, value: FillStyleType.LinearGradient})},
      startGradientMatrix: {type: Rgba.type},
      endGradientMatrix: {type: Rgba.type},
      gradient: {type: MorphGradient.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
