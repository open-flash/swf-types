import {CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Int32} from "../avm1/values/int32";
import {ShapeRecordType} from "./shape-record-type";

export interface CurvedEdge {
  type: ShapeRecordType.CurvedEdge;
  controlDeltaX: Int32;
  controlDeltaY: Int32;
  anchorDeltaX: Int32;
  anchorDeltaY: Int32;
}

export namespace CurvedEdge {
  export interface Json {
    type: "curved-edge";
    control_delta_x: number;
    control_delta_y: number;
    anchor_delta_x: number;
    anchor_delta_y: number;
  }

  export const type: DocumentType<CurvedEdge> = new DocumentType<CurvedEdge>({
    properties: {
      type: {type: new LiteralType({type: ShapeRecordType.type, value: ShapeRecordType.StyleChange})},
      controlDeltaX: {type: new Int32Type()},
      controlDeltay: {type: new Int32Type()},
      anchorDeltaX: {type: new Int32Type()},
      anchorDeltay: {type: new Int32Type()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
