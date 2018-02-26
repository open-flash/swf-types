import { $Uint32 } from "kryo/builtins/uint32";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Uint32 } from "semantic-types";
import { $ShapeStyles, ShapeStyles } from "../shape-style";
import { $Vector2D, Vector2D } from "../vector-2d";
import { $ShapeRecordType, ShapeRecordType } from "./_type";

export interface StyleChange {
  type: ShapeRecordType.StyleChange;
  moveTo?: Vector2D;
  leftFill?: Uint32;
  rightFill?: Uint32;
  lineStyle?: Uint32;
  newStyles?: ShapeStyles;
}

export const $StyleChange: DocumentIoType<StyleChange> = new DocumentType<StyleChange>({
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
