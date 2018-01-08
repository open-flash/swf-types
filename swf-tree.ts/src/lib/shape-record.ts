import { TaggedUnionType } from "kryo";
import { CurvedEdge } from "./shape-records/curved-edge";
import { StraightEdge } from "./shape-records/straight-edge";
import { StyleChange } from "./shape-records/style-change";

export type ShapeRecord =
  CurvedEdge
  | StraightEdge
  | StyleChange;

export namespace ShapeRecord {
  export type Json =
    CurvedEdge.Json
    | StraightEdge.Json
    | StyleChange.Json;

  export const type: TaggedUnionType<ShapeRecord> = new TaggedUnionType<ShapeRecord>({
    variants: [
      CurvedEdge.type,
      StraightEdge.type,
      StyleChange.type,
    ],
    tag: "type",
  });
}
