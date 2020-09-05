import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { $Matrix, Matrix } from "../matrix.js";
import { $Bitmap, Bitmap } from "./bitmap.js";

export interface MorphBitmap extends Bitmap {
  morphMatrix: Matrix;
}

export const $MorphBitmap: RecordIoType<MorphBitmap> = new RecordType<MorphBitmap>({
  properties: {
    type: $Bitmap.properties.type,
    bitmapId: $Bitmap.properties.bitmapId,
    matrix: $Bitmap.properties.matrix,
    morphMatrix: {type: $Matrix},
    repeating: $Bitmap.properties.repeating,
    smoothed: $Bitmap.properties.smoothed,
  },
  changeCase: CaseStyle.SnakeCase,
});
