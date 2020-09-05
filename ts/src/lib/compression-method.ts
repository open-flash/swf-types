import { CaseStyle } from "kryo";
import { TsEnumType } from "kryo/lib/ts-enum.js";

export enum CompressionMethod {
  None,
  Deflate,
  Lzma,
}

export const $CompressionMethod: TsEnumType<CompressionMethod> = new TsEnumType<CompressionMethod>({
  enum: CompressionMethod,
  changeCase: CaseStyle.KebabCase,
});
