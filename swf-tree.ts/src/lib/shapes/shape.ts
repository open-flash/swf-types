import {ArrayType, CaseStyle, DocumentType} from "kryo";
import {ShapeRecord} from "./shape-record";

export interface Shape {
  shapeRecords: ShapeRecord[];
}

export namespace Shape {
  export interface Json {
    "shape-records": ShapeRecord.Json[];
  }

  export const type: DocumentType<Shape> = new DocumentType<Shape>({
    properties: {
      shapeRecords: {type: new ArrayType({itemType: ShapeRecord.type, maxLength: Infinity})},
    },
    rename: CaseStyle.KebabCase,
  });
}
