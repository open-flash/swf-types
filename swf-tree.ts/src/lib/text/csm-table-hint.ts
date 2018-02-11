import { CaseStyle } from "kryo/case-style";
import { TsEnumType } from "kryo/types/ts-enum";

export enum CsmTableHint {
  Thin,
  Medium,
  Thick,
}

export const $CsmTableHint: TsEnumType<CsmTableHint> = new TsEnumType<CsmTableHint>({
  enum: CsmTableHint,
  changeCase: CaseStyle.KebabCase,
});
