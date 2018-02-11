import { $Sint32 } from "kryo/builtins/sint32";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Sint32 } from "semantic-types";
import { Fixed16P16 } from "./fixed-point/fixed16p16";

export interface Matrix {
  scaleX: Fixed16P16;
  scaleY: Fixed16P16;
  rotateSkew0: Fixed16P16;
  rotateSkew1: Fixed16P16;
  translateX: Sint32;
  translateY: Sint32;
}

export const $Matrix: DocumentIoType<Matrix> = new DocumentType<Matrix>({
  properties: {
    scaleX: {type: Fixed16P16},
    scaleY: {type: Fixed16P16},
    rotateSkew0: {type: Fixed16P16},
    rotateSkew1: {type: Fixed16P16},
    translateX: {type: $Sint32},
    translateY: {type: $Sint32},
  },
  changeCase: CaseStyle.SnakeCase,
});
