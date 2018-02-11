import { CaseStyle } from "kryo/case-style";
import { TsEnumType } from "kryo/types/ts-enum";

export enum GetUrl2Method {
  None,
  Get,
  Post,
}

export const $GetUrl2Method: TsEnumType<GetUrl2Method> = new TsEnumType<GetUrl2Method>({
  enum: GetUrl2Method,
  changeCase: CaseStyle.KebabCase,
});
