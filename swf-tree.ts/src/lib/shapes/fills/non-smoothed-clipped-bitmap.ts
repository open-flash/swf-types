import {CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {Matrix} from "../../matrix";
import {StraightSRgba8} from "../../straight-s-rgba8";
import {FillStyleType} from "./_type";

export interface NonSmoothedClippedBitmap {
  type: FillStyleType.NonSmoothedClippedBitmap;
  bitmapId: Uint16;
  bitmapMatrix: Matrix;
}

export namespace NonSmoothedClippedBitmap {
  export interface Json {
    type: "non-smoothed-clipped-bitmap";
    bitmap_id: number;
    bitmap_matrix: Matrix.Json;
  }

  export const type: DocumentType<NonSmoothedClippedBitmap> = new DocumentType<NonSmoothedClippedBitmap>({
    properties: {
      type: {type: new LiteralType({type: FillStyleType.type, value: FillStyleType.NonSmoothedClippedBitmap})},
      bitmapId: {type: new Int32Type()},
      bitmapMatrix: {type: StraightSRgba8.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
