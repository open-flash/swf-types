import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/lib/array.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { $FillStyle, FillStyle } from "./fill-style.js";
import { $LineStyle, LineStyle } from "./line-style.js";

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
