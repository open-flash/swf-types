import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/array";
import { RecordIoType, RecordType } from "kryo/record";

import { $MorphShapeRecord, MorphShapeRecord } from "./morph-shape-record.mjs";
import { $MorphShapeStyles, MorphShapeStyles } from "./morph-shape-styles.mjs";
import { Shape } from "./shape.mjs";

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
