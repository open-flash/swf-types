import {CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {Matrix} from "../../matrix";
import {StraightSRgba8} from "../../straight-s-rgba8";
import {FillStyleType} from "./_type";

export interface NonSmoothedRepeatingBitmap {
  type: FillStyleType.RepeatingBitmap;
  bitmapId: Uint16;
  bitmapMatrix: Matrix;
}

export namespace NonSmoothedRepeatingBitmap {
  export interface Json {
    type: "non-smoothed-repeating-bitmap";
    bitmap_id: number;
    bitmap_matrix: Matrix.Json;
  }

  export const type: DocumentType<NonSmoothedRepeatingBitmap> = new DocumentType<NonSmoothedRepeatingBitmap>({
    properties: {
      type: {
        type: new LiteralType({
          type: FillStyleType.type,
          value: FillStyleType.NonSmoothedRepeatingBitmap,
        }),
      },
      bitmapId: {type: new Int32Type()},
      bitmapMatrix: {type: StraightSRgba8.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
