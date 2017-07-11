import {CaseStyle, SimpleEnumType} from "kryo";

export enum LanguageCode {
  Auto,
  Latin,
  Japanese,
  Korean,
  SimplifiedChinese,
  TraditionalChinese,
}

export namespace LanguageCode {
  export type Json =
    "auto"
    | "latin"
    | "japanese"
    | "korean"
    | "simplified-chinese"
    | "traditional-chinese";

  export const type: SimpleEnumType<LanguageCode> = new SimpleEnumType<LanguageCode>({
    enum: LanguageCode,
    rename: CaseStyle.KebabCase,
  });
}
