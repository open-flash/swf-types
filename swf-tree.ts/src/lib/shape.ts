import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { $FillStyle, FillStyle } from "./fill-style";
import { $LineStyle, LineStyle } from "./line-style";
import { $ShapeRecord, ShapeRecord } from "./shape-record";

export interface Shape {
  fillStyles: FillStyle[];
  lineStyles: LineStyle[];
  records: ShapeRecord[];
}

export const $Shape: DocumentIoType<Shape> = new DocumentType<Shape>({
  properties: {
    fillStyles: {type: new ArrayType({itemType: $FillStyle, maxLength: Infinity})},
    lineStyles: {type: new ArrayType({itemType: $LineStyle, maxLength: Infinity})},
    records: {type: new ArrayType({itemType: $ShapeRecord, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
