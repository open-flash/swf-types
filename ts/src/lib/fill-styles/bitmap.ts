import { $Boolean } from "kryo/lib/boolean.js";
import { $Uint16 } from "kryo/lib/integer.js";
import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { Uint16 } from "semantic-types";
import { $Matrix, Matrix } from "../matrix.js";
import { $FillStyleType, FillStyleType } from "./_type.js";

export interface Bitmap {
  type: FillStyleType.Bitmap;
  bitmapId: Uint16;
  matrix: Matrix;
  repeating: boolean;
  smoothed: boolean;
}

export const $Bitmap: RecordIoType<Bitmap> = new RecordType<Bitmap>({
  properties: {
    type: {type: new LiteralType({type: $FillStyleType, value: FillStyleType.Bitmap as FillStyleType.Bitmap})},
    bitmapId: {type: $Uint16},
    matrix: {type: $Matrix},
    repeating: {type: $Boolean},
    smoothed: {type: $Boolean},
  },
  changeCase: CaseStyle.SnakeCase,
});
