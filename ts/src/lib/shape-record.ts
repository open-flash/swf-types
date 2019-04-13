import { TaggedUnionType } from "kryo/types/tagged-union";
import { $Edge, $StyleChange } from "./shape-records";
import { Edge } from "./shape-records/edge";
import { StyleChange } from "./shape-records/style-change";

export type ShapeRecord =
  Edge
  | StyleChange;

export const $ShapeRecord: TaggedUnionType<ShapeRecord> = new TaggedUnionType<ShapeRecord>({
  variants: [
    $Edge,
    $StyleChange,
  ],
  tag: "type",
});
