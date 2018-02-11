import { CaseStyle } from "kryo/case-style";
import { TsEnumType } from "kryo/types/ts-enum";

export enum MorphFillStyleType {
  Bitmap,
  FocalGradient,
  LinearGradient,
  RadialGradient,
  Solid,
}

export const $MorphFillStyleType: TsEnumType<MorphFillStyleType> = new TsEnumType<MorphFillStyleType>({
  enum: MorphFillStyleType,
  changeCase: CaseStyle.KebabCase,
});
