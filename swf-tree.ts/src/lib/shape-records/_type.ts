import { CaseStyle } from "kryo/case-style";
import { TsEnumType } from "kryo/types/ts-enum";

export enum ShapeRecordType {
  CurvedEdge,
  StraightEdge,
  StyleChange,
}

export const $ShapeRecordType: TsEnumType<ShapeRecordType> = new TsEnumType<ShapeRecordType>({
  enum: ShapeRecordType,
  changeCase: CaseStyle.KebabCase,
});
