import { CaseStyle } from "kryo/case-style";
import { TsEnumType } from "kryo/types/ts-enum";

export enum ValueType {
  String,
  Float32,
  Null,
  Undefined,
  Register,
  Boolean,
  Float64,
  Sint32,
  Constant,
}

export const $ValueType: TsEnumType<ValueType> = new TsEnumType<ValueType>({
  enum: ValueType,
  changeCase: CaseStyle.KebabCase,
});
