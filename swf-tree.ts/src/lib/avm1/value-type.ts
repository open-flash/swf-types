import { CaseStyle } from "kryo/case-style";
import { TsEnumType } from "kryo/types/ts-enum";

export enum ValueType {
  Boolean,
  Constant,
  Float32,
  Float64,
  Null,
  Register,
  Sint32,
  String,
  Undefined,
}

export const $ValueType: TsEnumType<ValueType> = new TsEnumType<ValueType>({
  enum: ValueType,
  changeCase: CaseStyle.KebabCase,
});
