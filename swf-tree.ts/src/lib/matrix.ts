import { $Sint32 } from "kryo/builtins/sint32";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Sint32 } from "semantic-types";
import { Sfixed16P16 } from "./fixed-point/sfixed16p16";

export interface Matrix {
  scaleX: Sfixed16P16;
  scaleY: Sfixed16P16;
  rotateSkew0: Sfixed16P16;
  rotateSkew1: Sfixed16P16;
  translateX: Sint32;
  translateY: Sint32;
}

export const $Matrix: DocumentIoType<Matrix> = new DocumentType<Matrix>({
  properties: {
    scaleX: {type: Sfixed16P16},
    scaleY: {type: Sfixed16P16},
    rotateSkew0: {type: Sfixed16P16},
    rotateSkew1: {type: Sfixed16P16},
    translateX: {type: $Sint32},
    translateY: {type: $Sint32},
  },
  changeCase: CaseStyle.SnakeCase,
});
