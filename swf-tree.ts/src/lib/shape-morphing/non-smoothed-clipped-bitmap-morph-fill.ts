import {CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Matrix} from "../basic-types/matrix";
import {Rgba} from "../basic-types/rgba";
import {FillStyleType} from "../shapes/fill-style-type";
import {Uint16} from "semantic-types";

export interface NonSmoothedClippedBitmapMorphFill {
  fillStypeType: FillStyleType.NonSmoothedClippedBitmap;
  bitmapId: Uint16;
  startBitmapMatrix: Matrix;
  endBitmapMatrix: Matrix;
}

export namespace NonSmoothedClippedBitmapMorphFill {
  export interface Json {
    "fill-style-type": "non-smoothed-clipped-bitmap";
    "bitmap-id": number;
    "start-bitmap-matrix": Matrix.Json;
    "end-bitmap-matrix": Matrix.Json;
  }

  /* tslint:disable-next-line:max-line-length */
  export const type: DocumentType<NonSmoothedClippedBitmapMorphFill> = new DocumentType<NonSmoothedClippedBitmapMorphFill>({
    properties: {
      fillStyleType: {type: new LiteralType({type: FillStyleType.type, value: FillStyleType.NonSmoothedClippedBitmap})},
      bitmapId: {type: new Int32Type()},
      startBitmapMatrix: {type: Rgba.type},
      endBitmapMatrix: {type: Rgba.type},
    },
    rename: CaseStyle.KebabCase,
  });
}
