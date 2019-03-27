import { CaseStyle } from "kryo/case-style";
import { TsEnumType } from "kryo/types/ts-enum";

export enum MpegVersion {
  V1,
  V2,
  V2_5,
}

export const $MpegVersion: TsEnumType<MpegVersion> = new TsEnumType<MpegVersion>({
  enum: MpegVersion,
  changeCase: CaseStyle.KebabCase,
});
