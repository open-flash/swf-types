import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";

import { $MorphShapeStyles, MorphShapeStyles } from "../morph-shape-styles.js";
import { $Vector2D, Vector2D } from "../vector-2d.js";
import { $StyleChange, StyleChange } from "./style-change.js";

export interface MorphStyleChange extends StyleChange {
  morphMoveTo?: Vector2D;
  newStyles?: MorphShapeStyles;
}

export const $MorphStyleChange: RecordIoType<MorphStyleChange> = new RecordType<MorphStyleChange>({
  properties: {
    type: $StyleChange.properties.type,
    moveTo: $StyleChange.properties.moveTo,
    morphMoveTo: {type: $Vector2D, optional: true},
    leftFill: $StyleChange.properties.leftFill,
    rightFill: $StyleChange.properties.rightFill,
    lineStyle: $StyleChange.properties.lineStyle,
    newStyles: {type: $MorphShapeStyles, optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
});
