import {CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {Matrix} from "../matrix";
import {FillStyleType} from "../shapes/fills/_type";
import {StraightSRgba8} from "../straight-s-rgba8";

export interface ClippedBitmapMorphFill {
  fillStypeType: FillStyleType.ClippedBitmap;
  bitmapId: Uint16;
  startBitmapMatrix: Matrix;
  endBitmapMatrix: Matrix;
}

export namespace ClippedBitmapMorphFill {
  export interface Json {
    fill_style_type: "clipped-bitmap";
    bitmap_id: number;
    start_bitmap_matrix: Matrix.Json;
    end_bitmap_matrix: Matrix.Json;
  }

  export const type: DocumentType<ClippedBitmapMorphFill> = new DocumentType<ClippedBitmapMorphFill>({
    properties: {
      fillStyleType: {type: new LiteralType({type: FillStyleType.type, value: FillStyleType.ClippedBitmap})},
      bitmapId: {type: new Int32Type()},
      startBitmapMatrix: {type: StraightSRgba8.type},
      endBitmapMatrix: {type: StraightSRgba8.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
