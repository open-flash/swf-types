import { CaseStyle } from "kryo";
import { TsEnumType } from "kryo/ts-enum";

export enum CapStyle {
  Round,
  None,
  Square,
}

export const $CapStyle: TsEnumType<CapStyle> = new TsEnumType<CapStyle>({
  enum: CapStyle,
  changeCase: CaseStyle.PascalCase,
});
