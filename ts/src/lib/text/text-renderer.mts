import { CaseStyle } from "kryo";
import { TsEnumType } from "kryo/ts-enum";

export enum TextRenderer {
  Normal,
  Advanced,
}

export const $TextRenderer: TsEnumType<TextRenderer> = new TsEnumType<TextRenderer>({
  enum: TextRenderer,
  changeCase: CaseStyle.PascalCase,
});
