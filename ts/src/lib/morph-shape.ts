import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/array";
import { RecordIoType, RecordType } from "kryo/record";

import { $MorphShapeRecord, MorphShapeRecord } from "./morph-shape-record.js";
import { $MorphShapeStyles, MorphShapeStyles } from "./morph-shape-styles.js";
import { Shape } from "./shape.js";

export interface MorphShape extends Shape {
  initialStyles: MorphShapeStyles;
  records: MorphShapeRecord[];
}

export const $MorphShape: RecordIoType<MorphShape> = new RecordType<MorphShape>({
  properties: {
    initialStyles: {type: $MorphShapeStyles},
    records: {type: new ArrayType({itemType: $MorphShapeRecord, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
