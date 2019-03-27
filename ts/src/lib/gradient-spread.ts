import { CaseStyle } from "kryo/case-style";
import { TsEnumType } from "kryo/types/ts-enum";

export enum GradientSpread {
  Pad,
  Reflect,
  Repeat,
}

export const $GradientSpread: TsEnumType<GradientSpread> = new TsEnumType<GradientSpread>({
  enum: GradientSpread,
  changeCase: CaseStyle.KebabCase,
});
