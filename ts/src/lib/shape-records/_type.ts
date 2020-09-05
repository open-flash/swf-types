import { CaseStyle } from "kryo";
import { TsEnumType } from "kryo/lib/ts-enum.js";

export enum ShapeRecordType {
  Edge,
  StyleChange,
}

export const $ShapeRecordType: TsEnumType<ShapeRecordType> = new TsEnumType<ShapeRecordType>({
  enum: ShapeRecordType,
  changeCase: CaseStyle.KebabCase,
});
