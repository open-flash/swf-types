import { ArrayType, CaseStyle, DocumentType } from "kryo";
import { MorphFillStyle } from "./morph-fill-style";
import { MorphLineStyle } from "./morph-line-style";
import { MorphShapeRecord } from "./morph-shape-record";

export interface MorphShape {
  fillStyles: MorphFillStyle[];
  lineStyles: MorphLineStyle[];
  records: MorphShapeRecord[];
}

export namespace MorphShape {
  export interface Json {
    fill_styles: MorphFillStyle.Json[];
    line_styles: MorphLineStyle.Json[];
    records: MorphShapeRecord.Json[];
  }

  export const type: DocumentType<MorphShape> = new DocumentType<MorphShape>({
    properties: {
      fillStyles: {type: new ArrayType({itemType: MorphFillStyle.type, maxLength: Infinity})},
      lineStyles: {type: new ArrayType({itemType: MorphLineStyle.type, maxLength: Infinity})},
      records: {type: new ArrayType({itemType: MorphShapeRecord.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
