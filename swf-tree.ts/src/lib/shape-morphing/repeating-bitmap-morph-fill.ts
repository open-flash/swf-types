import {CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {Matrix} from "../matrix";
import {FillStyleType} from "../shapes/fills/_type";
import {StraightSRgba8} from "../straight-s-rgba8";

export interface RepeatingBitmapMorphFill {
  fillStypeType: FillStyleType.RepeatingBitmap;
  bitmapId: Uint16;
  startBitmapMatrix: Matrix;
  endBitmapMatrix: Matrix;
}

export namespace RepeatingBitmapMorphFill {
  export interface Json {
    fill_style_type: "repeating-bitmap";
    bitmap_id: number;
    start_bitmap_matrix: Matrix.Json;
    end_bitmap_matrix: Matrix.Json;
  }

  export const type: DocumentType<RepeatingBitmapMorphFill> = new DocumentType<RepeatingBitmapMorphFill>({
    properties: {
      fillStyleType: {type: new LiteralType({type: FillStyleType.type, value: FillStyleType.RepeatingBitmap})},
      bitmapId: {type: new Int32Type()},
      startBitmapMatrix: {type: StraightSRgba8.type},
      endBitmapMatrix: {type: StraightSRgba8.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
