import { $Uint32 } from "kryo/builtins/uint32";
import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Uint32 } from "semantic-types";
import { $MorphFillStyle, MorphFillStyle } from "../morph-fill-style";
import { $MorphLineStyle, MorphLineStyle } from "../morph-line-style";
import { $Vector2D, Vector2D } from "../vector-2d";
import { $MorphShapeRecordType, MorphShapeRecordType } from "./_type";

export interface MorphStyleChange {
  type: MorphShapeRecordType.MorphStyleChange;
  startMoveTo?: Vector2D;
  endMoveTo?: Vector2D;
  leftFill?: Uint32;
  rightFill?: Uint32;
  lineStyle?: Uint32;
  fillStyles?: MorphFillStyle[];
  lineStyles?: MorphLineStyle[];
}

export const $MorphStyleChange: DocumentIoType<MorphStyleChange> = new DocumentType<MorphStyleChange>({
  properties: {
    type: {
      type: new LiteralType({
        type: $MorphShapeRecordType,
        value: MorphShapeRecordType.MorphStyleChange as MorphShapeRecordType.MorphStyleChange,
      }),
    },
    startMoveTo: {type: $Vector2D, optional: true},
    endMoveTo: {type: $Vector2D, optional: true},
    leftFill: {type: $Uint32, optional: true},
    rightFill: {type: $Uint32, optional: true},
    lineStyle: {type: $Uint32, optional: true},
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
