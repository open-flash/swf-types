import { TaggedUnionType } from "kryo/types/tagged-union";
import * as shapeRecords from "./shape-records";

export type MorphShapeRecord =
  shapeRecords.MorphCurvedEdge
  | shapeRecords.MorphStraightEdge
  | shapeRecords.MorphStyleChange;

export const $MorphShapeRecord: TaggedUnionType<MorphShapeRecord> = new TaggedUnionType<MorphShapeRecord>({
  variants: [
    shapeRecords.$MorphCurvedEdge,
    shapeRecords.$MorphStraightEdge,
    shapeRecords.$MorphStyleChange,
  ],
  tag: "type",
});
