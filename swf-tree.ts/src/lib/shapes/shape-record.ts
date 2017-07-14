import {TaggedUnionType} from "kryo";
import {CurvedEdge} from "./records/curved-edge";
import {StraightEdge} from "./records/straight-edge";
import {StyleChange} from "./records/style-change";

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
