import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { $Vector2D, Vector2D } from "../vector-2d";
import { $CurvedEdge, CurvedEdge } from "./curved-edge";

export interface MorphCurvedEdge extends CurvedEdge {
  morphControlDelta: Vector2D;
  morphAnchorDelta: Vector2D;
}

export const $MorphCurvedEdge: DocumentIoType<MorphCurvedEdge> = new DocumentType<MorphCurvedEdge>({
  properties: {
    ...$CurvedEdge.properties,
    morphControlDelta: {type: $Vector2D},
    morphAnchorDelta: {type: $Vector2D},
  },
  changeCase: CaseStyle.SnakeCase,
});
