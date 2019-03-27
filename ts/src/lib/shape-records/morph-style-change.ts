import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { $MorphShapeStyles, MorphShapeStyles } from "../morph-shape-styles";
import { $Vector2D, Vector2D } from "../vector-2d";
import { $StyleChange, StyleChange } from "./style-change";

export interface MorphStyleChange extends StyleChange {
  morphMoveTo?: Vector2D;
  newStyles?: MorphShapeStyles;
}

export const $MorphStyleChange: DocumentIoType<MorphStyleChange> = new DocumentType<MorphStyleChange>({
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
