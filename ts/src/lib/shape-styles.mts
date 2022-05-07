import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/array";
import { RecordIoType, RecordType } from "kryo/record";

import { $FillStyle, FillStyle } from "./fill-style.mjs";
import { $LineStyle, LineStyle } from "./line-style.mjs";

export interface ShapeStyles {
  fill: FillStyle[];
  line: LineStyle[];
}

export const $ShapeStyles: RecordIoType<ShapeStyles> = new RecordType<ShapeStyles>({
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
