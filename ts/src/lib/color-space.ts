import { CaseStyle } from "kryo";
import { TsEnumType } from "kryo/lib/ts-enum.js";

export enum ColorSpace {
  SRgb,
  LinearRgb,
}

export const $ColorSpace: TsEnumType<ColorSpace> = new TsEnumType<ColorSpace>({
  enum: ColorSpace,
  changeCase: CaseStyle.KebabCase,
});
