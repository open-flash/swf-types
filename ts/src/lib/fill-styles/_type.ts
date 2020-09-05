import { CaseStyle } from "kryo";
import { TsEnumType } from "kryo/lib/ts-enum.js";

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
