import { CaseStyle } from "kryo";
import { TsEnumType } from "kryo/ts-enum";

export enum FillStyleType {
  Bitmap,
  FocalGradient,
  LinearGradient,
  RadialGradient,
  Solid,
}

export const $FillStyleType: TsEnumType<FillStyleType> = new TsEnumType<FillStyleType>({
  enum: FillStyleType,
  changeCase: CaseStyle.PascalCase,
});
