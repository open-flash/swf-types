import { CaseStyle } from "kryo/case-style";
import { TsEnumType } from "kryo/types/ts-enum";

export enum TextRenderer {
  Normal,
  Advanced,
}

export const $TextRenderer: TsEnumType<TextRenderer> = new TsEnumType<TextRenderer>({
  enum: TextRenderer,
  changeCase: CaseStyle.KebabCase,
});
