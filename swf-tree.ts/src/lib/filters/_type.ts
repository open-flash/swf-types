import { CaseStyle } from "kryo/case-style";
import { TsEnumType } from "kryo/types/ts-enum";

export enum FilterType {
  DropShadow,
  Blur,
  Glow,
  Bevel,
  GradientGlow,
  Convolution,
  ColorMatrix,
  GradientBevel,
}

export const $FilterType: TsEnumType<FilterType> = new TsEnumType<FilterType>({
  enum: FilterType,
  changeCase: CaseStyle.KebabCase,
});
