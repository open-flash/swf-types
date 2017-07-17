import {ArrayType, CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint32} from "semantic-types";
import {FillStyle} from "../fill-style";
import {LineStyle} from "../line-style";
import {ShapeRecordType} from "./_type";
import {Vector2D} from "../../vector-2d";

export interface StyleChange {
  type: ShapeRecordType.StyleChange;
  moveTo?: Vector2D;
  leftFill?: Uint32;
  rightFill?: Uint32;
  lineStyle?: Uint32;
  fillStyles?: FillStyle[];
  lineStyles?: LineStyle[];
}

export namespace StyleChange {
  export interface Json {
    type: "style-change";
    move_to?: number;
    left_fill?: number;
    right_fill?: number;
    line_style?: number;
    fill_styles?: FillStyle.Json[];
    line_styles?: LineStyle.Json[];
  }

  export const type: DocumentType<StyleChange> = new DocumentType<StyleChange>({
    properties: {
      type: {
        type: new LiteralType({
          type: ShapeRecordType.type,
          value: ShapeRecordType.StyleChange,
        }),
      },
      moveTo: {type: Vector2D.type, optional: true},
      leftFill: {type: new Int32Type(), optional: true},
      rightFill: {type: new Int32Type(), optional: true},
      lineStyle: {type: new Int32Type(), optional: true},
      fillStyles: {
        type: new ArrayType({itemType: FillStyle.type, maxLength: Infinity}),
        optional: true,
      },
      lineStyles: {
        type: new ArrayType({itemType: LineStyle.type, maxLength: Infinity}),
        optional: true,
      },
    },
    rename: CaseStyle.SnakeCase,
  });
}
