import { CaseStyle } from "kryo";
import { TsEnumType } from "kryo/ts-enum";

export enum ColorSpace {
  SRgb,
  LinearRgb,
}

export const $ColorSpace: TsEnumType<ColorSpace> = new TsEnumType<ColorSpace>({
  enum: ColorSpace,
  changeCase: CaseStyle.PascalCase,
});
