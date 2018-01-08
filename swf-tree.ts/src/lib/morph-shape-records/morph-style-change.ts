import { ArrayType, CaseStyle, DocumentType, IntegerType, LiteralType } from "kryo";
import { Uint32 } from "semantic-types";
import { MorphFillStyle } from "../morph-fill-style";
import { MorphLineStyle } from "../morph-line-style";
import { Vector2D } from "../vector-2d";
import { MorphShapeRecordType } from "./_type";

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

export namespace MorphStyleChange {
  export interface Json {
    type: "morph-style-change";
    start_move_to?: number;
    end_move_to?: number;
    left_fill?: number;
    right_fill?: number;
    line_style?: number;
    fill_styles?: MorphFillStyle.Json[];
    line_styles?: MorphLineStyle.Json[];
  }

  export const type: DocumentType<MorphStyleChange> = new DocumentType<MorphStyleChange>({
    properties: {
      type: {
        type: new LiteralType({
          type: MorphShapeRecordType.type,
          value: MorphShapeRecordType.MorphStyleChange,
        }),
      },
      startMoveTo: {type: Vector2D.type, optional: true},
      endMoveTo: {type: Vector2D.type, optional: true},
      leftFill: {type: new IntegerType(), optional: true},
      rightFill: {type: new IntegerType(), optional: true},
      lineStyle: {type: new IntegerType(), optional: true},
      fillStyles: {
        type: new ArrayType({itemType: MorphFillStyle.type, maxLength: Infinity}),
        optional: true,
      },
      lineStyles: {
        type: new ArrayType({itemType: MorphLineStyle.type, maxLength: Infinity}),
        optional: true,
      },
    },
    rename: CaseStyle.SnakeCase,
  });
}
