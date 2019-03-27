import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { $FillStyle, FillStyle } from "./fill-style";
import { $LineStyle, LineStyle } from "./line-style";

export interface ShapeStyles {
  fill: FillStyle[];
  line: LineStyle[];
}

export const $ShapeStyles: DocumentIoType<ShapeStyles> = new DocumentType<ShapeStyles>({
  properties: {
    fill: {
      type: new ArrayType({itemType: $FillStyle, maxLength: Infinity}),
    },
    line: {
      type: new ArrayType({itemType: $LineStyle, maxLength: Infinity}),
    },
  },
  changeCase: CaseStyle.SnakeCase,
});
