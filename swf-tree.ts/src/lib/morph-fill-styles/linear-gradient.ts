import { CaseStyle, DocumentType, LiteralType } from "kryo";
import { Matrix } from "../matrix";
import { MorphGradient } from "../morph-gradient";
import { StraightSRgba8 } from "../straight-s-rgba8";
import { MorphFillStyleType } from "./_type";

export interface LinearGradient {
  type: MorphFillStyleType.LinearGradient;
  startMatrix: Matrix;
  endMatrix: Matrix;
  gradient: MorphGradient;
}

export namespace LinearGradient {
  export interface Json {
    type: "linear-gradient";
    start_matrix: Matrix.Json;
    end_matrix: Matrix.Json;
    gradient: MorphGradient.Json;
  }

  export const type: DocumentType<LinearGradient> = new DocumentType<LinearGradient>({
    properties: {
      type: {type: new LiteralType({type: MorphFillStyleType.type, value: MorphFillStyleType.LinearGradient})},
      startMatrix: {type: StraightSRgba8.type},
      endMatrix: {type: StraightSRgba8.type},
      gradient: {type: MorphGradient.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
