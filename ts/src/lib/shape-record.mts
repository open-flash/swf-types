import { TaggedUnionType } from "kryo/tagged-union";

import { Edge } from "./shape-records/edge.mjs";
import { $Edge, $StyleChange } from "./shape-records/index.mjs";
import { StyleChange } from "./shape-records/style-change.mjs";

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
