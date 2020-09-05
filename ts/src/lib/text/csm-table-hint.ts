import { CaseStyle } from "kryo";
import { TsEnumType } from "kryo/lib/ts-enum.js";

export enum CsmTableHint {
  Thin,
  Medium,
  Thick,
}

export const $CsmTableHint: TsEnumType<CsmTableHint> = new TsEnumType<CsmTableHint>({
  enum: CsmTableHint,
  changeCase: CaseStyle.PascalCase,
});
