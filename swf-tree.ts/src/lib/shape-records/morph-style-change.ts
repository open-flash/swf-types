import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { $MorphShapeStyles, MorphShapeStyles } from "../morph-shape-style";
import { $Vector2D, Vector2D } from "../vector-2d";
import { $StyleChange, StyleChange } from "./style-change";

export interface MorphStyleChange extends StyleChange {
  morphMoveTo?: Vector2D;
  newStyles?: MorphShapeStyles;
}

export const $MorphStyleChange: DocumentIoType<MorphStyleChange> = new DocumentType<MorphStyleChange>({
  properties: {
    ...$StyleChange.properties,
    morphMoveTo: {type: $Vector2D, optional: true},
    newStyles: {type: $MorphShapeStyles, optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
});
