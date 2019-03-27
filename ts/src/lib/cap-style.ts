import { CaseStyle } from "kryo/case-style";
import { TsEnumType } from "kryo/types/ts-enum";

export enum CapStyle {
  Round,
  None,
  Square,
}

export const $CapStyle: TsEnumType<CapStyle> = new TsEnumType<CapStyle>({
  enum: CapStyle,
  changeCase: CaseStyle.KebabCase,
});
