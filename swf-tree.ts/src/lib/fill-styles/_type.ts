import { CaseStyle } from "kryo/case-style";
import { TsEnumType } from "kryo/types/ts-enum";

export enum FillStyleType {
  Bitmap,
  FocalGradient,
  LinearGradient,
  RadialGradient,
  Solid,
}

export const $FillStyleType: TsEnumType<FillStyleType> = new TsEnumType<FillStyleType>({
  enum: FillStyleType,
  changeCase: CaseStyle.KebabCase,
});
