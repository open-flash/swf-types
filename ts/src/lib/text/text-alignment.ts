import { CaseStyle } from "kryo";
import { TsEnumType } from "kryo/ts-enum";

export enum TextAlignment {
  Left,
  Right,
  Center,
  Justify,
}

export const $TextAlignment: TsEnumType<TextAlignment> = new TsEnumType<TextAlignment>({
  enum: TextAlignment,
  changeCase: CaseStyle.PascalCase,
});
