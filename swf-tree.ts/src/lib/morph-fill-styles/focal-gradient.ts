import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {Fixed8P8} from "../fixed-point/fixed8p8";
import {Matrix} from "../matrix";
import {MorphGradient} from "../morph-gradient";
import {StraightSRgba8} from "../straight-s-rgba8";
import {MorphFillStyleType} from "./_type";

export interface FocalGradient {
  type: MorphFillStyleType.FocalGradient;
  startMatrix: Matrix;
  endMatrix: Matrix;
  gradient: MorphGradient;
  startFocalPoint: Fixed8P8;
  endFocalPoint: Fixed8P8;
}

export namespace FocalGradient {
  export interface Json {
    type: "focal-gradient";
    start_matrix: Matrix.Json;
    end_matrix: Matrix.Json;
    gradient: MorphGradient.Json;
    start_focal_point: string;
    end_focal_point: string;
  }

  export const type: DocumentType<FocalGradient> = new DocumentType<FocalGradient>({
    properties: {
      type: {type: new LiteralType({type: MorphFillStyleType.type, value: MorphFillStyleType.FocalGradient})},
      startMatrix: {type: StraightSRgba8.type},
      endMatrix: {type: StraightSRgba8.type},
      gradient: {type: MorphGradient.type},
      startFocalPoint: {type: Fixed8P8.type},
      endFocalPoint: {type: Fixed8P8.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
