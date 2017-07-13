import {CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {Matrix} from "../basic-types/matrix";
import {StraightSRgba} from "../basic-types/straight-s-rgba";
import {FillStyleType} from "./fill-style-type";

export interface ClippedBitmapFill {
  fillStypeType: FillStyleType.ClippedBitmap;
  bitmapId: Uint16;
  bitmapMatrix: Matrix;
}

export namespace ClippedBitmapFill {
  export interface Json {
    fill_style_type: "clipped-bitmap";
    bitmap_id: number;
    bitmap_matrix: Matrix.Json;
  }

  export const type: DocumentType<ClippedBitmapFill> = new DocumentType<ClippedBitmapFill>({
    properties: {
      fillStyleType: {type: new LiteralType({type: FillStyleType.type, value: FillStyleType.ClippedBitmap})},
      bitmapId: {type: new Int32Type()},
      bitmapMatrix: {type: StraightSRgba.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
