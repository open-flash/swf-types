import {CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {Matrix} from "../basic-types/matrix";
import {Rgba} from "../basic-types/rgba";
import {FillStyleType} from "../shapes/fill-style-type";

export interface ClippedBitmapMorphFill {
  fillStypeType: FillStyleType.ClippedBitmap;
  bitmapId: Uint16;
  startBitmapMatrix: Matrix;
  endBitmapMatrix: Matrix;
}

export namespace ClippedBitmapMorphFill {
  export interface Json {
    "fill-style-type": "clipped-bitmap";
    "bitmap-id": number;
    "start-bitmap-matrix": Matrix.Json;
    "end-bitmap-matrix": Matrix.Json;
  }

  export const type: DocumentType<ClippedBitmapMorphFill> = new DocumentType<ClippedBitmapMorphFill>({
    properties: {
      fillStyleType: {type: new LiteralType({type: FillStyleType.type, value: FillStyleType.ClippedBitmap})},
      bitmapId: {type: new Int32Type()},
      startBitmapMatrix: {type: Rgba.type},
      endBitmapMatrix: {type: Rgba.type},
    },
    rename: CaseStyle.KebabCase,
  });
}
