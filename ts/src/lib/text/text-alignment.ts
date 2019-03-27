import { CaseStyle } from "kryo/case-style";
import { TsEnumType } from "kryo/types/ts-enum";

export enum TextAlignment {
  Left,
  Right,
  Center,
  Justify,
}

export const $TextAlignment: TsEnumType<TextAlignment> = new TsEnumType<TextAlignment>({
  enum: TextAlignment,
  changeCase: CaseStyle.KebabCase,
});
