import { CaseStyle } from "kryo";
import { TsEnumType } from "kryo/lib/ts-enum.js";

export enum CapStyle {
  Round,
  None,
  Square,
}

export const $CapStyle: TsEnumType<CapStyle> = new TsEnumType<CapStyle>({
  enum: CapStyle,
  changeCase: CaseStyle.KebabCase,
});
