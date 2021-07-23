import { CaseStyle } from "kryo";
import { TsEnumType } from "kryo/ts-enum";

export enum CsmTableHint {
  Thin,
  Medium,
  Thick,
}

export const $CsmTableHint: TsEnumType<CsmTableHint> = new TsEnumType<CsmTableHint>({
  enum: CsmTableHint,
  changeCase: CaseStyle.PascalCase,
});
