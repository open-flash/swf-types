import { TaggedUnionType } from "kryo/types/tagged-union";
import { $CurvedEdge, $StraightEdge, $StyleChange } from "./shape-records";
import { CurvedEdge } from "./shape-records/curved-edge";
import { StraightEdge } from "./shape-records/straight-edge";
import { StyleChange } from "./shape-records/style-change";

export type ShapeRecord =
  CurvedEdge
  | StraightEdge
  | StyleChange;

export const $ShapeRecord: TaggedUnionType<ShapeRecord> = new TaggedUnionType<ShapeRecord>({
  variants: [
    $CurvedEdge,
    $StraightEdge,
    $StyleChange,
  ],
  tag: "type",
});
