import { CaseStyle, DocumentType, LiteralType } from "kryo";
import { Vector2D } from "../vector-2d";
import { MorphShapeRecordType } from "./_type";

export interface MorphCurvedEdge {
  type: MorphShapeRecordType.MorphCurvedEdge;
  startControlDelta: Vector2D;
  endControlDelta: Vector2D;
  startAnchorDelta: Vector2D;
  endAnchorDelta: Vector2D;
}

export namespace MorphCurvedEdge {
  export interface Json {
    type: "morph-curved-edge";
    start_control_delta: Vector2D.Json;
    end_control_delta: Vector2D.Json;
    start_anchor_delta: Vector2D.Json;
    end_anchor_delta: Vector2D.Json;
  }

  export const type: DocumentType<MorphCurvedEdge> = new DocumentType<MorphCurvedEdge>({
    properties: {
      type: {
        type: new LiteralType({
          type: MorphShapeRecordType.type,
          value: MorphShapeRecordType.MorphCurvedEdge,
        }),
      },
      sartControlDelta: {type: Vector2D.type},
      endControlDelta: {type: Vector2D.type},
      startAnchorDelta: {type: Vector2D.type},
      endAnchorDelta: {type: Vector2D.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
