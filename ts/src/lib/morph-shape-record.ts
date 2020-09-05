import { TaggedUnionType } from "kryo/lib/tagged-union.js";
import * as shapeRecords from "./shape-records/index.js";

export type MorphShapeRecord =
  shapeRecords.MorphEdge
  | shapeRecords.MorphStyleChange;

export const $MorphShapeRecord: TaggedUnionType<MorphShapeRecord> = new TaggedUnionType<MorphShapeRecord>({
  variants: [
    shapeRecords.$MorphEdge,
    shapeRecords.$MorphStyleChange,
  ],
  tag: "type",
});
