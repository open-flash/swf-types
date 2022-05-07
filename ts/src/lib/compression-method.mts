import { CaseStyle } from "kryo";
import { TsEnumType } from "kryo/ts-enum";

export enum CompressionMethod {
  None,
  Deflate,
  Lzma,
}

export const $CompressionMethod: TsEnumType<CompressionMethod> = new TsEnumType<CompressionMethod>({
  enum: CompressionMethod,
  changeCase: CaseStyle.PascalCase,
});
