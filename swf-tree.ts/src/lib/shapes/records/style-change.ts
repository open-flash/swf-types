import {ArrayType, CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Sint32, Uint32} from "semantic-types";
import {FillStyle} from "../fill-style";
import {LineStyle} from "../line-style";
import {ShapeRecordType} from "./_type";

export interface StyleChange {
  type: ShapeRecordType.StyleChange;
  deltaX?: Sint32;
  deltaY?: Sint32;
  leftFill?: Uint32;
  rightFill?: Uint32;
  lineStyle?: Uint32;
  fillStyles?: FillStyle[];
  lineStyles?: LineStyle[];
}

export namespace StyleChange {
  export interface Json {
    type: "style-change";
    delta_x?: number;
    delta_y?: number;
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
          value: ShapeRecordType.StyleChange
        }),
      },
      deltaX: {type: new Int32Type(), optional: true},
      deltaY: {type: new Int32Type(), optional: true},
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
