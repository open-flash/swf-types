import { CaseStyle } from "kryo";
import { TsEnumType } from "kryo/ts-enum";

export enum ShapeRecordType {
  Edge,
  StyleChange,
}

export const $ShapeRecordType: TsEnumType<ShapeRecordType> = new TsEnumType<ShapeRecordType>({
  enum: ShapeRecordType,
  changeCase: CaseStyle.PascalCase,
});
