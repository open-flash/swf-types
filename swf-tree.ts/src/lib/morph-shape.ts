import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { $MorphShapeRecord, MorphShapeRecord } from "./morph-shape-record";
import { $MorphShapeStyles, MorphShapeStyles } from "./morph-shape-style";
import { Shape } from "./shape";

export interface MorphShape extends Shape {
  initialStyles: MorphShapeStyles;
  records: MorphShapeRecord[];
}

export const $MorphShape: DocumentIoType<MorphShape> = new DocumentType<MorphShape>({
  properties: {
    initialStyles: {type: $MorphShapeStyles},
    records: {type: new ArrayType({itemType: $MorphShapeRecord, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
