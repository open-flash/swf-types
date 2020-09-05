import { CaseStyle } from "kryo";
import { $Uint32 } from "kryo/lib/integer.js";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Uint32 } from "semantic-types";

import { $ShapeStyles, ShapeStyles } from "../shape-styles.js";
import { $Vector2D, Vector2D } from "../vector-2d.js";
import { $ShapeRecordType, ShapeRecordType } from "./_type.js";

export interface StyleChange {
  type: ShapeRecordType.StyleChange;
  moveTo?: Vector2D;
  leftFill?: Uint32;
  rightFill?: Uint32;
  lineStyle?: Uint32;
  newStyles?: ShapeStyles;
}

export const $StyleChange: RecordIoType<StyleChange> = new RecordType<StyleChange>({
  properties: {
    type: {
      type: new LiteralType({
        type: $ShapeRecordType,
        value: ShapeRecordType.StyleChange as ShapeRecordType.StyleChange,
      }),
    },
    moveTo: {type: $Vector2D, optional: true},
    leftFill: {type: $Uint32, optional: true},
    rightFill: {type: $Uint32, optional: true},
    lineStyle: {type: $Uint32, optional: true},
    newStyles: {type: $ShapeStyles, optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
});
