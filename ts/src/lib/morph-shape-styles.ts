import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { $MorphFillStyle, MorphFillStyle } from "./morph-fill-style";
import { $MorphLineStyle, MorphLineStyle } from "./morph-line-style";
import { ShapeStyles } from "./shape-styles";

export interface MorphShapeStyles extends ShapeStyles {
  fill: MorphFillStyle[];
  line: MorphLineStyle[];
}

export const $MorphShapeStyles: DocumentIoType<MorphShapeStyles> = new DocumentType<MorphShapeStyles>({
  properties: {
    fill: {
      type: new ArrayType({itemType: $MorphFillStyle, maxLength: Infinity}),
    },
    line: {
      type: new ArrayType({itemType: $MorphLineStyle, maxLength: Infinity}),
    },
  },
  changeCase: CaseStyle.SnakeCase,
});
