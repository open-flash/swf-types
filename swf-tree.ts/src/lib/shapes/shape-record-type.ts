import {CaseStyle, SimpleEnumType} from "kryo";

export enum ShapeRecordType {
  StyleChange,
  StraightEdge,
  CurvedEdge,
}

export namespace ShapeRecordType {
  export type Json =
    "style-change"
    | "straight-edge"
    | "curved-edge";

  export const type: SimpleEnumType<ShapeRecordType> = new SimpleEnumType<ShapeRecordType>({
    enum: ShapeRecordType,
    rename: CaseStyle.KebabCase,
  });
}
