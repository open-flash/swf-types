import { CaseStyle } from "kryo/case-style";
import { TsEnumType } from "kryo/types/ts-enum";

export enum LanguageCode {
  Auto,
  Latin,
  Japanese,
  Korean,
  SimplifiedChinese,
  TraditionalChinese,
}

export const $LanguageCode: TsEnumType<LanguageCode> = new TsEnumType<LanguageCode>({
  enum: LanguageCode,
  changeCase: CaseStyle.KebabCase,
});
