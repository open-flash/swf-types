import { ArrayType, CaseStyle, DocumentType } from "kryo";
import { ShapeRecord } from "./shape-record";

export interface Glyph {
  records: ShapeRecord[];
}

export namespace Glyph {
  export interface Json {
    records: ShapeRecord.Json[];
  }

  export const type: DocumentType<Glyph> = new DocumentType<Glyph>({
    properties: {
      records: {type: new ArrayType({itemType: ShapeRecord.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
