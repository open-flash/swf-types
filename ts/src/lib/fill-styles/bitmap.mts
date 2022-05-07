import { CaseStyle } from "kryo";
import { $Boolean } from "kryo/boolean";
import { $Uint16 } from "kryo/integer";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Uint16 } from "semantic-types";

import { $Matrix, Matrix } from "../matrix.mjs";
import { $FillStyleType, FillStyleType } from "./_type.mjs";

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
