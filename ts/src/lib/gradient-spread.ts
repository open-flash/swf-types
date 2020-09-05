import { CaseStyle } from "kryo";
import { TsEnumType } from "kryo/lib/ts-enum.js";

export enum GradientSpread {
  Pad,
  Reflect,
  Repeat,
}

export const $GradientSpread: TsEnumType<GradientSpread> = new TsEnumType<GradientSpread>({
  enum: GradientSpread,
  changeCase: CaseStyle.KebabCase,
});
