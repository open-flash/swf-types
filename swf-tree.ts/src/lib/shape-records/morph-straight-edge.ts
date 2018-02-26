import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { $Vector2D, Vector2D } from "../vector-2d";
import { $StraightEdge, StraightEdge } from "./straight-edge";

export interface MorphStraightEdge extends StraightEdge {
  morphDelta: Vector2D;
}

export const $MorphStraightEdge: DocumentIoType<MorphStraightEdge> = new DocumentType<MorphStraightEdge>({
  properties: {
    ...$StraightEdge.properties,
    morphDelta: {type: $Vector2D},
  },
  changeCase: CaseStyle.SnakeCase,
});
