import { CaseStyle } from "kryo";
import { TsEnumType } from "kryo/ts-enum";

export enum GradientSpread {
  Pad,
  Reflect,
  Repeat,
}

export const $GradientSpread: TsEnumType<GradientSpread> = new TsEnumType<GradientSpread>({
  enum: GradientSpread,
  changeCase: CaseStyle.PascalCase,
});
