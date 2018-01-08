import { BooleanType, CaseStyle, DocumentType, IntegerType, LiteralType } from "kryo";
import { Uint16 } from "semantic-types";
import { Matrix } from "../matrix";
import { StraightSRgba8 } from "../straight-s-rgba8";
import { MorphFillStyleType } from "./_type";

export interface Bitmap {
  type: MorphFillStyleType.Bitmap;
  bitmapId: Uint16;
  startMatrix: Matrix;
  endMatrix: Matrix;
  repeating: boolean;
  smoothed: boolean;
}

export namespace Bitmap {
  export interface Json {
    type: "bitmap";
    bitmap_id: number;
    start_matrix: Matrix.Json;
    end_matrix: Matrix.Json;
    repeating: boolean;
    smoothed: boolean;
  }

  export const type: DocumentType<Bitmap> = new DocumentType<Bitmap>({
    properties: {
      type: {type: new LiteralType({type: MorphFillStyleType.type, value: MorphFillStyleType.Bitmap})},
      bitmapId: {type: new IntegerType()},
      startMatrix: {type: StraightSRgba8.type},
      endMatrix: {type: StraightSRgba8.type},
      repeating: {type: new BooleanType()},
      smoothed: {type: new BooleanType()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
