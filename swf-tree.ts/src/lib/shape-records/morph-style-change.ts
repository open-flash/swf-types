import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { $MorphFillStyle, MorphFillStyle } from "../morph-fill-style";
import { $MorphLineStyle, MorphLineStyle } from "../morph-line-style";
import { $Vector2D, Vector2D } from "../vector-2d";
import { $StyleChange, StyleChange } from "./style-change";

export interface MorphStyleChange extends StyleChange {
  morphMoveTo?: Vector2D;
  fillStyles?: MorphFillStyle[];
  lineStyles?: MorphLineStyle[];
}

export const $MorphStyleChange: DocumentIoType<MorphStyleChange> = new DocumentType<MorphStyleChange>({
  properties: {
    ...$StyleChange.properties,
    morphMoveTo: {type: $Vector2D, optional: true},
    fillStyles: {
      type: new ArrayType({itemType: $MorphFillStyle, maxLength: Infinity}),
      optional: true,
    },
    lineStyles: {
      type: new ArrayType({itemType: $MorphLineStyle, maxLength: Infinity}),
      optional: true,
    },
  },
  changeCase: CaseStyle.SnakeCase,
});
