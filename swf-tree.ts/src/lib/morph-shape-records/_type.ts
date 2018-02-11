import { CaseStyle } from "kryo/case-style";
import { TsEnumType } from "kryo/types/ts-enum";

export enum MorphShapeRecordType {
  MorphCurvedEdge,
  MorphStraightEdge,
  MorphStyleChange,
}

export const $MorphShapeRecordType: TsEnumType<MorphShapeRecordType> = new TsEnumType<MorphShapeRecordType>({
  enum: MorphShapeRecordType,
  changeCase: CaseStyle.KebabCase,
});
