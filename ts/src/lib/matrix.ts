import { CaseStyle } from "kryo";
import { $Sint32 } from "kryo/integer";
import { RecordIoType, RecordType } from "kryo/record";
import { Sint32 } from "semantic-types";

import { Sfixed16P16 } from "./fixed-point/sfixed16p16.js";

export interface Matrix {
  scaleX: Sfixed16P16;
  scaleY: Sfixed16P16;
  rotateSkew0: Sfixed16P16;
  rotateSkew1: Sfixed16P16;
  translateX: Sint32;
  translateY: Sint32;
}

export const $Matrix: RecordIoType<Matrix> = new RecordType<Matrix>({
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
