import {CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {Matrix} from "../../matrix";
import {StraightSRgba8} from "../../straight-s-rgba8";
import {FillStyleType} from "./_type";

export interface ClippedBitmap {
  type: FillStyleType.ClippedBitmap;
  bitmapId: Uint16;
  bitmapMatrix: Matrix;
}

export namespace ClippedBitmap {
  export interface Json {
    type: "clipped-bitmap";
    bitmap_id: number;
    bitmap_matrix: Matrix.Json;
  }

  export const type: DocumentType<ClippedBitmap> = new DocumentType<ClippedBitmap>({
    properties: {
      type: {type: new LiteralType({type: FillStyleType.type, value: FillStyleType.ClippedBitmap})},
      bitmapId: {type: new Int32Type()},
      bitmapMatrix: {type: StraightSRgba8.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
