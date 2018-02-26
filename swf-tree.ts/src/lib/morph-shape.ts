import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { $MorphFillStyle, MorphFillStyle } from "./morph-fill-style";
import { $MorphLineStyle, MorphLineStyle } from "./morph-line-style";
import { $MorphShapeRecord, MorphShapeRecord } from "./morph-shape-record";
import { Shape } from "./shape";

export interface MorphShape extends Shape {
  fillStyles: MorphFillStyle[];
  lineStyles: MorphLineStyle[];
  records: MorphShapeRecord[];
}

export const $MorphShape: DocumentIoType<MorphShape> = new DocumentType<MorphShape>({
  properties: {
    fillStyles: {type: new ArrayType({itemType: $MorphFillStyle, maxLength: Infinity})},
    lineStyles: {type: new ArrayType({itemType: $MorphLineStyle, maxLength: Infinity})},
    records: {type: new ArrayType({itemType: $MorphShapeRecord, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
