import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {FocalGradient} from "../../gradients/focal-gradient";
import {Matrix} from "../../matrix";
import {StraightSRgba8} from "../../straight-s-rgba8";
import {FillStyleType} from "./_type";

export interface FocalRadialGradient {
  type: FillStyleType.FocalRadialGradient;
  gradientMatrix: Matrix;
  gradient: FocalGradient;
}

export namespace FocalRadialGradient {
  export interface Json {
    "type-style-type": "focal-radial-gradient";
    "gradient-matrix": Matrix.Json;
    gradient: FocalGradient.Json;
  }

  export const type: DocumentType<FocalRadialGradient> = new DocumentType<FocalRadialGradient>({
    properties: {
      type: {type: new LiteralType({type: FillStyleType.type, value: FillStyleType.FocalRadialGradient})},
      gradientMatrix: {type: StraightSRgba8.type},
      gradient: {type: FocalGradient.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
