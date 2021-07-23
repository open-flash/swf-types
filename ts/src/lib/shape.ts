import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/array";
import { RecordIoType, RecordType } from "kryo/record";

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
