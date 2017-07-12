import {CaseStyle, DocumentType, Float64Type} from "kryo";
import {Sfixed16p16, Sint16} from "semantic-types";

export interface Matrix {
  scaleX?: Sfixed16p16;
  scaleY?: Sfixed16p16;
  rotateSkew0?: Sfixed16p16;
  rotateSkew1?: Sfixed16p16;
  translateX?: Sint16;
  translateY?: Sint16;
}

export namespace Matrix {
  export interface Json {
    scale_x?: number;
    scale_y?: number;
    rotate_skew0?: number;
    rotate_skew1?: number;
    translate_x?: number;
    translate_y?: number;
  }

  export const type: DocumentType<Matrix> = new DocumentType<Matrix>({
    properties: {
      scaleX: {
        type: new Float64Type(),
        optional: true,
      },
      scaleY: {
        type: new Float64Type(),
        optional: true,
      },
      rotateSkew0: {
        type: new Float64Type(),
        optional: true,
      },
      rotateSkew1: {
        type: new Float64Type(),
        optional: true,
      },
      translateX: {
        type: new Float64Type(),
        optional: true,
      },
      translateY: {
        type: new Float64Type(),
        optional: true,
      },
    },
    rename: CaseStyle.SnakeCase,
  });
}
