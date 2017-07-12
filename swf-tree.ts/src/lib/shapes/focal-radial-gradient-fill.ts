import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {Matrix} from "../basic-types/matrix";
import {Rgba} from "../basic-types/rgba";
import {FocalGradient} from "../gradients/focal-gradient";
import {FillStyleType} from "./fill-style-type";

export interface FocalRadialGradientFill {
  fillStypeType: FillStyleType.FocalRadialGradient;
  gradientMatrix: Matrix;
  gradient: FocalGradient;
}

export namespace FocalRadialGradientFill {
  export interface Json {
    "fill-style-type": "focal-radial-gradient";
    "gradient-matrix": Matrix.Json;
    gradient: FocalGradient.Json;
  }

  export const type: DocumentType<FocalRadialGradientFill> = new DocumentType<FocalRadialGradientFill>({
    properties: {
      fillStyleType: {type: new LiteralType({type: FillStyleType.type, value: FillStyleType.FocalRadialGradient})},
      gradientMatrix: {type: Rgba.type},
      gradient: {type: FocalGradient.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
