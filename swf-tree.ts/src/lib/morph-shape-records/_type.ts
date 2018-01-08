import { CaseStyle, SimpleEnumType } from "kryo";

export enum MorphShapeRecordType {
  MorphCurvedEdge,
  MorphStraightEdge,
  MorphStyleChange,
}

export namespace MorphShapeRecordType {
  export type Json =
    "morph-curved-edge"
    | "morph-straight-edge"
    | "morph-style-change";

  export const type: SimpleEnumType<MorphShapeRecordType> = new SimpleEnumType<MorphShapeRecordType>({
    enum: MorphShapeRecordType,
    rename: CaseStyle.KebabCase,
  });
}
