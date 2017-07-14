import {CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Sint32} from "semantic-types";
import {ShapeRecordType} from "./_type";

export interface CurvedEdge {
  type: ShapeRecordType.CurvedEdge;
  controlX: Sint32;
  controlY: Sint32;
  deltaX: Sint32;
  deltaY: Sint32;
}

export namespace CurvedEdge {
  export interface Json {
    type: "curved-edge";
    control_x: number;
    control_y: number;
    delta_x: number;
    delta_y: number;
  }

  export const type: DocumentType<CurvedEdge> = new DocumentType<CurvedEdge>({
    properties: {
      type: {type: new LiteralType({type: ShapeRecordType.type, value: ShapeRecordType.CurvedEdge})},
      controlX: {type: new Int32Type()},
      controly: {type: new Int32Type()},
      deltaX: {type: new Int32Type()},
      deltaY: {type: new Int32Type()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
