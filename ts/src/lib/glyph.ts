import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { $ShapeRecord, ShapeRecord } from "./shape-record";

export interface Glyph {
  records: ShapeRecord[];
}

export const $Glyph: DocumentIoType<Glyph> = new DocumentType<Glyph>({
  properties: {
    records: {type: new ArrayType({itemType: $ShapeRecord, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
