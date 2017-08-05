import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {Fixed8P8} from "../fixed-point/fixed8p8";
import {Gradient} from "../gradient";
import {Matrix} from "../matrix";
import {StraightSRgba8} from "../straight-s-rgba8";
import {FillStyleType} from "./_type";

export interface FocalGradient {
  type: FillStyleType.FocalGradient;
  matrix: Matrix;
  gradient: Gradient;
  focalPoint: Fixed8P8;
}

export namespace FocalGradient {
  export interface Json {
    type: "focal-gradient";
    matrix: Matrix.Json;
    gradient: Gradient.Json;
    focal_point: string;
  }

  export const type: DocumentType<FocalGradient> = new DocumentType<FocalGradient>({
    properties: {
      type: {type: new LiteralType({type: FillStyleType.type, value: FillStyleType.FocalGradient})},
      matrix: {type: StraightSRgba8.type},
      gradient: {type: Gradient.type},
      focalPoint: {type: Fixed8P8.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
