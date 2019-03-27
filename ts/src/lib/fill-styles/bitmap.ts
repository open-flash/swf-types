import { $Boolean } from "kryo/builtins/boolean";
import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Uint16 } from "semantic-types";
import { $Matrix, Matrix } from "../matrix";
import { $FillStyleType, FillStyleType } from "./_type";

export interface Bitmap {
  type: FillStyleType.Bitmap;
  bitmapId: Uint16;
  matrix: Matrix;
  repeating: boolean;
  smoothed: boolean;
}

export const $Bitmap: DocumentIoType<Bitmap> = new DocumentType<Bitmap>({
  properties: {
    type: {type: new LiteralType({type: $FillStyleType, value: FillStyleType.Bitmap as FillStyleType.Bitmap})},
    bitmapId: {type: $Uint16},
    matrix: {type: $Matrix},
    repeating: {type: $Boolean},
    smoothed: {type: $Boolean},
  },
  changeCase: CaseStyle.SnakeCase,
});
