import { CaseStyle } from "kryo";
import { TsEnumType } from "kryo/ts-enum";

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
  changeCase: CaseStyle.PascalCase,
});
