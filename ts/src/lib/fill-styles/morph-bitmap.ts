import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { $Matrix, Matrix } from "../matrix";
import { $Bitmap, Bitmap } from "./bitmap";

export interface MorphBitmap extends Bitmap {
  morphMatrix: Matrix;
}

export const $MorphBitmap: DocumentIoType<MorphBitmap> = new DocumentType<MorphBitmap>({
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
