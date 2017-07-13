import {ArrayType, CaseStyle, DocumentType} from "kryo";
import {ShapeRecord} from "./shape-record";

export interface SimpleShape {
  shapeRecords: ShapeRecord[];
}

export namespace SimpleShape {
  export interface Json {
    shape_records: ShapeRecord.Json[];
  }

  export const type: DocumentType<SimpleShape> = new DocumentType<SimpleShape>({
    properties: {
      shapeRecords: {type: new ArrayType({itemType: ShapeRecord.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
