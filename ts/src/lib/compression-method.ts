import { CaseStyle } from "kryo/case-style";
import { TsEnumType } from "kryo/types/ts-enum";

export enum CompressionMethod {
  None,
  Deflate,
  Lzma,
}

export const $CompressionMethod: TsEnumType<CompressionMethod> = new TsEnumType<CompressionMethod>({
  enum: CompressionMethod,
  changeCase: CaseStyle.KebabCase,
});
