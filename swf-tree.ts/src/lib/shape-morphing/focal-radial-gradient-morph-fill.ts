import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {Matrix} from "../basic-types/matrix";
import {Rgba} from "../basic-types/rgba";
import {FillStyleType} from "../shapes/fill-style-type";

export interface FocalRadialGradientMorphFill {
  fillStypeType: FillStyleType.FocalRadialGradient;
  startGradientMatrix: Matrix;
  endGradientMatrix: Matrix;
  // TODO: MorphGradient or MorphFocalGradient?
  gradient: any;
}

export namespace FocalRadialGradientMorphFill {
  export interface Json {
    "fill-style-type": "focal-radial-gradient";
    "start-gradient-matrix": Matrix.Json;
    "end-gradient-matrix": Matrix.Json;
    gradient: any;
  }

  export const type: DocumentType<FocalRadialGradientMorphFill> = new DocumentType<FocalRadialGradientMorphFill>({
    properties: {
      fillStyleType: {type: new LiteralType({type: FillStyleType.type, value: FillStyleType.FocalRadialGradient})},
      startGradientMatrix: {type: Rgba.type},
      endGradientMatrix: {type: Rgba.type},
      gradient: null as any,
    },
    rename: CaseStyle.KebabCase,
  });
}
