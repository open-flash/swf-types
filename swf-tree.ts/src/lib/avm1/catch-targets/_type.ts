import { CaseStyle } from "kryo/case-style";
import { TsEnumType } from "kryo/types/ts-enum";

export enum CatchTargetType {
  Register,
  Variable,
}

export const $CatchTargetType: TsEnumType<CatchTargetType> = new TsEnumType<CatchTargetType>({
  enum: CatchTargetType,
  changeCase: CaseStyle.KebabCase,
});
