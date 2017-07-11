import {CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {Matrix} from "../basic-types/matrix";
import {Rgba} from "../basic-types/rgba";
import {FillStyleType} from "./fill-style-type";

export interface RepeatingBitmapFill {
  fillStypeType: FillStyleType.RepeatingBitmap;
  bitmapId: Uint16;
  bitmapMatrix: Matrix;
}

export namespace RepeatingBitmapFill {
  export interface Json {
    "fill-style-type": "repeating-bitmap";
    "bitmap-id": number;
    "bitmap-matrix": Matrix.Json;
  }

  export const type: DocumentType<RepeatingBitmapFill> = new DocumentType<RepeatingBitmapFill>({
    properties: {
      fillStyleType: {type: new LiteralType({type: FillStyleType.type, value: FillStyleType.RepeatingBitmap})},
      bitmapId: {type: new Int32Type()},
      bitmapMatrix: {type: Rgba.type},
    },
    rename: CaseStyle.KebabCase,
  });
}
