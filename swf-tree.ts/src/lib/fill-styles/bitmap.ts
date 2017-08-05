import {BooleanType, CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {Matrix} from "../matrix";
import {StraightSRgba8} from "../straight-s-rgba8";
import {FillStyleType} from "./_type";

export interface Bitmap {
  type: FillStyleType.Bitmap;
  bitmapId: Uint16;
  matrix: Matrix;
  repeating: boolean;
  smoothed: boolean;
}

export namespace Bitmap {
  export interface Json {
    type: "bitmap";
    bitmap_id: number;
    matrix: Matrix.Json;
    repeating: boolean;
    smoothed: boolean;
  }

  export const type: DocumentType<Bitmap> = new DocumentType<Bitmap>({
    properties: {
      type: {type: new LiteralType({type: FillStyleType.type, value: FillStyleType.Bitmap})},
      bitmapId: {type: new Int32Type()},
      matrix: {type: StraightSRgba8.type},
      repeating: {type: new BooleanType()},
      smoothed: {type: new BooleanType()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
