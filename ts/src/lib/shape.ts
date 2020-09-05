import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/lib/array.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { $ShapeRecord, ShapeRecord } from "./shape-record.js";
import { $ShapeStyles, ShapeStyles } from "./shape-styles.js";

export interface Shape {
  initialStyles: ShapeStyles;
  records: ShapeRecord[];
}

export const $Shape: RecordIoType<Shape> = new RecordType<Shape>({
  properties: {
    initialStyles: {type: $ShapeStyles},
    records: {type: new ArrayType({itemType: $ShapeRecord, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
