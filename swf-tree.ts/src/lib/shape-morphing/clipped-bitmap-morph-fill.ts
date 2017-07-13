import {CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {Matrix} from "../basic-types/matrix";
import {StraightSRgba} from "../basic-types/straight-s-rgba";
import {FillStyleType} from "../shapes/fill-style-type";

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
      startBitmapMatrix: {type: StraightSRgba.type},
      endBitmapMatrix: {type: StraightSRgba.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
