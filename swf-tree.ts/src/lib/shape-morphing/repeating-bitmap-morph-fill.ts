import {CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {Matrix} from "../basic-types/matrix";
import {Rgba} from "../basic-types/rgba";
import {FillStyleType} from "../shapes/fill-style-type";

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
      startBitmapMatrix: {type: Rgba.type},
      endBitmapMatrix: {type: Rgba.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
