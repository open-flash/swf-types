import {CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {Matrix} from "../basic-types/matrix";
import {Rgba} from "../basic-types/rgba";
import {FillStyleType} from "./fill-style-type";

export interface ClippedBitmapFill {
  fillStypeType: FillStyleType.ClippedBitmap;
  bitmapId: Uint16;
  bitmapMatrix: Matrix;
}

export namespace ClippedBitmapFill {
  export interface Json {
    "fill-style-type": "clipped-bitmap";
    "bitmap-id": number;
    "bitmap-matrix": Matrix.Json;
  }

  export const type: DocumentType<ClippedBitmapFill> = new DocumentType<ClippedBitmapFill>({
    properties: {
      fillStyleType: {type: new LiteralType({type: FillStyleType.type, value: FillStyleType.ClippedBitmap})},
      bitmapId: {type: new Int32Type()},
      bitmapMatrix: {type: Rgba.type},
    },
    rename: CaseStyle.KebabCase,
  });
}
