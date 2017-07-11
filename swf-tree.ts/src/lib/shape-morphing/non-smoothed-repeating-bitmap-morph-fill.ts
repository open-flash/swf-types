import {CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {Matrix} from "../basic-types/matrix";
import {Rgba} from "../basic-types/rgba";
import {FillStyleType} from "../shapes/fill-style-type";

export interface NonSmoothedRepeatingBitmapMorphFill {
  fillStypeType: FillStyleType.NonSmoothedRepeatingBitmap;
  bitmapId: Uint16;
  startBitmapMatrix: Matrix;
  endBitmapMatrix: Matrix;
}

export namespace NonSmoothedRepeatingBitmapMorphFill {
  export interface Json {
    "fill-style-type": "non-smoothed-repeating-bitmap";
    "bitmap-id": number;
    "start-bitmap-matrix": Matrix.Json;
    "end-bitmap-matrix": Matrix.Json;
  }

  /* tslint:disable-next-line:max-line-length */
  export const type: DocumentType<NonSmoothedRepeatingBitmapMorphFill> = new DocumentType<NonSmoothedRepeatingBitmapMorphFill>({
    properties: {
      fillStyleType: {
        type: new LiteralType({
          type: FillStyleType.type,
          value: FillStyleType.NonSmoothedRepeatingBitmap,
        }),
      },
      bitmapId: {type: new Int32Type()},
      startBitmapMatrix: {type: Rgba.type},
      endBitmapMatrix: {type: Rgba.type},
    },
    rename: CaseStyle.KebabCase,
  });
}
