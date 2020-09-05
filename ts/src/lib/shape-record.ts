import { TaggedUnionType } from "kryo/lib/tagged-union.js";

import { Edge } from "./shape-records/edge.js";
import { $Edge, $StyleChange } from "./shape-records/index.js";
import { StyleChange } from "./shape-records/style-change.js";

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
