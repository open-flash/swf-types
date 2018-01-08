import { CaseStyle, DocumentType, LiteralType } from "kryo";
import { Vector2D } from "../vector-2d";
import { MorphShapeRecordType } from "./_type";

export interface MorphStraightEdge {
  type: MorphShapeRecordType.MorphStraightEdge;
  startDelta: Vector2D;
  endDelta: Vector2D;
}

export namespace MorphStraightEdge {
  export interface Json {
    type: "morph-straight-edge";
    start_delta: Vector2D.Json;
    end_delta: Vector2D.Json;
  }

  export const type: DocumentType<MorphStraightEdge> = new DocumentType<MorphStraightEdge>({
    properties: {
      type: {
        type: new LiteralType({
          type: MorphShapeRecordType.type,
          value: MorphShapeRecordType.MorphStraightEdge,
        }),
      },
      startDelta: {type: Vector2D.type},
      endDelta: {type: Vector2D.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
