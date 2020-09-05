import { CaseStyle } from "kryo";
import { TsEnumType } from "kryo/lib/ts-enum.js";

export enum TextRenderer {
  Normal,
  Advanced,
}

export const $TextRenderer: TsEnumType<TextRenderer> = new TsEnumType<TextRenderer>({
  enum: TextRenderer,
  changeCase: CaseStyle.KebabCase,
});
