import {CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {Matrix} from "../basic-types/matrix";
import {Rgba} from "../basic-types/rgba";
import {FillStyleType} from "./fill-style-type";

export interface NonSmoothedClippedBitmapFill {
  fillStypeType: FillStyleType.NonSmoothedClippedBitmap;
  bitmapId: Uint16;
  bitmapMatrix: Matrix;
}

export namespace NonSmoothedClippedBitmapFill {
  export interface Json {
    "fill-style-type": "non-smoothed-clipped-bitmap";
    "bitmap-id": number;
    "bitmap-matrix": Matrix.Json;
  }

  export const type: DocumentType<NonSmoothedClippedBitmapFill> = new DocumentType<NonSmoothedClippedBitmapFill>({
    properties: {
      fillStyleType: {type: new LiteralType({type: FillStyleType.type, value: FillStyleType.NonSmoothedClippedBitmap})},
      bitmapId: {type: new Int32Type()},
      bitmapMatrix: {type: Rgba.type},
    },
    rename: CaseStyle.KebabCase,
  });
}
