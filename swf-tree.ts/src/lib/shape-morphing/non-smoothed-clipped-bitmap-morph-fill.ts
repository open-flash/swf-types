import {CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {Matrix} from "../matrix";
import {FillStyleType} from "../shapes/fills/_type";
import {StraightSRgba8} from "../straight-s-rgba8";

export interface NonSmoothedClippedBitmapMorphFill {
  fillStypeType: FillStyleType.NonSmoothedClippedBitmap;
  bitmapId: Uint16;
  startBitmapMatrix: Matrix;
  endBitmapMatrix: Matrix;
}

export namespace NonSmoothedClippedBitmapMorphFill {
  export interface Json {
    fill_style_type: "non-smoothed-clipped-bitmap";
    bitmap_id: number;
    start_bitmap_matrix: Matrix.Json;
    end_bitmap_matrix: Matrix.Json;
  }

  /* tslint:disable-next-line:max-line-length */
  export const type: DocumentType<NonSmoothedClippedBitmapMorphFill> = new DocumentType<NonSmoothedClippedBitmapMorphFill>({
    properties: {
      fillStyleType: {type: new LiteralType({type: FillStyleType.type, value: FillStyleType.NonSmoothedClippedBitmap})},
      bitmapId: {type: new Int32Type()},
      startBitmapMatrix: {type: StraightSRgba8.type},
      endBitmapMatrix: {type: StraightSRgba8.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
