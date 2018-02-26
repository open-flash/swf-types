import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { $Matrix, Matrix } from "../matrix";
import { $Bitmap, Bitmap } from "./bitmap";

export interface MorphBitmap extends Bitmap {
  morphMatrix: Matrix;
}

export const $MorphBitmap: DocumentIoType<MorphBitmap> = new DocumentType<MorphBitmap>({
  properties: {
    ...$Bitmap.properties,
    morphMatrix: {type: $Matrix},
  },
  changeCase: CaseStyle.SnakeCase,
});
