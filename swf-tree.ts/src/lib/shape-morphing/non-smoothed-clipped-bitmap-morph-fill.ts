import {CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {Matrix} from "../basic-types/matrix";
import {StraightSRgba} from "../basic-types/straight-s-rgba";
import {FillStyleType} from "../shapes/fill-style-type";

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
      startBitmapMatrix: {type: StraightSRgba.type},
      endBitmapMatrix: {type: StraightSRgba.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
