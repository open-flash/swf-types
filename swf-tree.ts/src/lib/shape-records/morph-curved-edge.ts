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
    type: $CurvedEdge.properties.type,
    controlDelta: $CurvedEdge.properties.controlDelta,
    morphControlDelta: {type: $Vector2D},
    anchorDelta: $CurvedEdge.properties.anchorDelta,
    morphAnchorDelta: {type: $Vector2D},
  },
  changeCase: CaseStyle.SnakeCase,
});
