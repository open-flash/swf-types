import {ArrayType, CaseStyle, DocumentType} from "kryo";
import {FillStyle} from "./fill-style";
import {LineStyle} from "./line-style";
import {LineStyle2} from "./line-style2";
import {ShapeRecord} from "./shape-record";

export interface ShapeWithStyle {
  fillStyles: FillStyle[];
  // TODO: Linestyle2 if define shape 4
  lineStyles: (LineStyle | LineStyle2)[];
  shapeRecords: ShapeRecord[];
}

export namespace ShapeWithStyle {
  export interface Json {
    fill_styles: FillStyle.Json[];
    line_styles: LineStyle.Json[];
    shape_records: ShapeRecord.Json[];
  }

  export const type: DocumentType<ShapeWithStyle> = new DocumentType<ShapeWithStyle>({
    properties: {
      fillStyles: {type: new ArrayType({itemType: FillStyle.type, maxLength: Infinity})},
      lineStyles: {type: new ArrayType({itemType: LineStyle.type, maxLength: Infinity})},
      shapeRecords: {type: new ArrayType({itemType: ShapeRecord.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
