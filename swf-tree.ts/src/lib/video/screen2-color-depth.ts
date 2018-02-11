import { CaseStyle } from "kryo/case-style";
import { TsEnumType } from "kryo/types/ts-enum";

export enum Screen2ColorDepth {
  Rgb24,
  Hybrid15_7,
}

export const $Screen2ColorDepth: TsEnumType<Screen2ColorDepth> = new TsEnumType<Screen2ColorDepth>({
  enum: Screen2ColorDepth,
  changeCase: CaseStyle.KebabCase,
});
