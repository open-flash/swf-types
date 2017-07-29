import {CaseStyle, DocumentType, Int32Type} from "kryo";
import {Sint32} from "semantic-types";
import {Fixed16P16} from "./fixed-point/fixed16p16";

export interface Matrix {
  scaleX: Fixed16P16;
  scaleY: Fixed16P16;
  rotateSkew0: Fixed16P16;
  rotateSkew1: Fixed16P16;
  translateX: Sint32;
  translateY: Sint32;
}

export namespace Matrix {
  export interface Json {
    scale_x: number;
    scale_y: number;
    rotate_skew0: number;
    rotate_skew1: number;
    translate_x: number;
    translate_y: number;
  }

  export const type: DocumentType<Matrix> = new DocumentType<Matrix>({
    properties: {
      scaleX: {type: Fixed16P16.type},
      scaleY: {type: Fixed16P16.type},
      rotateSkew0: {type: Fixed16P16.type},
      rotateSkew1: {type: Fixed16P16.type},
      translateX: {type: new Int32Type()},
      translateY: {type: new Int32Type()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
