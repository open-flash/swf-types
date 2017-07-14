import {CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Sint32} from "semantic-types";
import {ShapeRecordType} from "./_type";

export interface StraightEdge {
  type: ShapeRecordType.StraightEdge;
  deltaX: Sint32;
  deltaY: Sint32;
}

export namespace StraightEdge {
  export interface Json {
    type: "straight-edge";
    delta_x: number;
    delta_y: number;
  }

  export const type: DocumentType<StraightEdge> = new DocumentType<StraightEdge>({
    properties: {
      type: {type: new LiteralType({type: ShapeRecordType.type, value: ShapeRecordType.StraightEdge})},
      deltaX: {type: new Int32Type()},
      deltaY: {type: new Int32Type()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
