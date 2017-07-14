import {CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {Matrix} from "../../matrix";
import {StraightSRgba8} from "../../straight-s-rgba8";
import {FillStyleType} from "./_type";

export interface RepeatingBitmap {
  type: FillStyleType.RepeatingBitmap;
  bitmapId: Uint16;
  bitmapMatrix: Matrix;
}

export namespace RepeatingBitmap {
  export interface Json {
    type: "repeating-bitmap";
    bitmap_id: number;
    bitmap_matrix: Matrix.Json;
  }

  export const type: DocumentType<RepeatingBitmap> = new DocumentType<RepeatingBitmap>({
    properties: {
      type: {type: new LiteralType({type: FillStyleType.type, value: FillStyleType.RepeatingBitmap})},
      bitmapId: {type: new Int32Type()},
      bitmapMatrix: {type: StraightSRgba8.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
