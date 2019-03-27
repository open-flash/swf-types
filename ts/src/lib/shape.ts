import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { $ShapeRecord, ShapeRecord } from "./shape-record";
import { $ShapeStyles, ShapeStyles } from "./shape-styles";

export interface Shape {
  initialStyles: ShapeStyles;
  records: ShapeRecord[];
}

export const $Shape: DocumentIoType<Shape> = new DocumentType<Shape>({
  properties: {
    initialStyles: {type: $ShapeStyles},
    records: {type: new ArrayType({itemType: $ShapeRecord, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
