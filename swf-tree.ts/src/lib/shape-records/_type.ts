import { CaseStyle, SimpleEnumType } from "kryo";

export enum ShapeRecordType {
  CurvedEdge,
  StraightEdge,
  StyleChange,
}

export namespace ShapeRecordType {
  export type Json =
    "curved-edge"
    | "straight-edge"
    | "style-change";

  export const type: SimpleEnumType<ShapeRecordType> = new SimpleEnumType<ShapeRecordType>({
    enum: ShapeRecordType,
    rename: CaseStyle.KebabCase,
  });
}
