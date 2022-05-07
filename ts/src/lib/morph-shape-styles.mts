import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/array";
import { RecordIoType, RecordType } from "kryo/record";

import { $MorphFillStyle, MorphFillStyle } from "./morph-fill-style.mjs";
import { $MorphLineStyle, MorphLineStyle } from "./morph-line-style.mjs";
import { ShapeStyles } from "./shape-styles.mjs";

export interface MorphShapeStyles extends ShapeStyles {
  fill: MorphFillStyle[];
  line: MorphLineStyle[];
}

export const $MorphShapeStyles: RecordIoType<MorphShapeStyles> = new RecordType<MorphShapeStyles>({
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
