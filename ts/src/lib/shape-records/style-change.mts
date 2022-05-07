import { CaseStyle } from "kryo";
import { $Uint32 } from "kryo/integer";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Uint32 } from "semantic-types";

import { $ShapeStyles, ShapeStyles } from "../shape-styles.mjs";
import { $Vector2D, Vector2D } from "../vector-2d.mjs";
import { $ShapeRecordType, ShapeRecordType } from "./_type.mjs";

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
