import { CaseStyle } from "kryo";
import { TsEnumType } from "kryo/lib/ts-enum.js";

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
  changeCase: CaseStyle.PascalCase,
});
