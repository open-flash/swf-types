import { TaggedUnionType } from "kryo";
import { MorphCurvedEdge } from "./morph-shape-records/morph-curved-edge";
import { MorphStraightEdge } from "./morph-shape-records/morph-straight-edge";
import { MorphStyleChange } from "./morph-shape-records/morph-style-change";

export type MorphShapeRecord =
  MorphCurvedEdge
  | MorphStraightEdge
  | MorphStyleChange;

export namespace MorphShapeRecord {
  export type Json =
    MorphCurvedEdge.Json
    | MorphStraightEdge.Json
    | MorphStyleChange.Json;

  export const type: TaggedUnionType<MorphShapeRecord> = new TaggedUnionType<MorphShapeRecord>({
    variants: [
      MorphCurvedEdge.type,
      MorphStraightEdge.type,
      MorphStyleChange.type,
    ],
    tag: "type",
  });
}
