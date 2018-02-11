import { TaggedUnionType } from "kryo/types/tagged-union";
import * as morphShapeRecords from "./morph-shape-records";

export type MorphShapeRecord =
  morphShapeRecords.MorphCurvedEdge
  | morphShapeRecords.MorphStraightEdge
  | morphShapeRecords.MorphStyleChange;

export const $MorphShapeRecord: TaggedUnionType<MorphShapeRecord> = new TaggedUnionType<MorphShapeRecord>({
  variants: [
    morphShapeRecords.$MorphCurvedEdge,
    morphShapeRecords.$MorphStraightEdge,
    morphShapeRecords.$MorphStyleChange,
  ],
  tag: "type",
});
