import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {Matrix} from "../basic-types/matrix";
import {Rgba} from "../basic-types/rgba";
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
    "fill-style-type": "radial-gradient";
    "start-gradient-matrix": Matrix.Json;
    "end-gradient-matrix": Matrix.Json;
    gradient: MorphGradient.Json;
  }

  export const type: DocumentType<RadialGradientMorphFill> = new DocumentType<RadialGradientMorphFill>({
    properties: {
      fillStyleType: {type: new LiteralType({type: FillStyleType.type, value: FillStyleType.RadialGradient})},
      startGradientMatrix: {type: Rgba.type},
      endGradientMatrix: {type: Rgba.type},
      gradient: {type: MorphGradient.type},
    },
    rename: CaseStyle.KebabCase,
  });
}
