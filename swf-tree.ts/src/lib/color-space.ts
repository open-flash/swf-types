import { CaseStyle } from "kryo/case-style";
import { TsEnumType } from "kryo/types/ts-enum";

export enum ColorSpace {
  SRgb,
  LinearRgb,
}

export const $ColorSpace: TsEnumType<ColorSpace> = new TsEnumType<ColorSpace>({
  enum: ColorSpace,
  changeCase: CaseStyle.KebabCase,
});
