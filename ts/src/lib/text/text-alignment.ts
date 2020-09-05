import { CaseStyle } from "kryo";
import { TsEnumType } from "kryo/lib/ts-enum.js";

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
